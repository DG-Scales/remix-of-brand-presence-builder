import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const FUNCTIONS_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

type State = "validating" | "ready" | "submitting" | "success" | "already" | "invalid";

export default function Unsubscribe() {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<State>("validating");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(`${FUNCTIONS_URL}?token=${encodeURIComponent(token)}`, {
          headers: { apikey: ANON_KEY },
        });
        const data = await res.json();
        if (!res.ok) return setState("invalid");
        if (data.valid === false && data.reason === "already_unsubscribed") return setState("already");
        if (data.valid) return setState("ready");
        setState("invalid");
      } catch {
        setState("invalid");
      }
    })();
  }, [token]);

  const confirm = async () => {
    setState("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error) return setState("invalid");
    if (data?.success) return setState("success");
    if (data?.reason === "already_unsubscribed") return setState("already");
    setState("invalid");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="glass-card max-w-md w-full p-10 text-center">
        {state === "validating" && (
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p>Checking your link…</p>
          </div>
        )}
        {state === "ready" && (
          <>
            <h1 className="font-heading text-2xl font-bold text-foreground mb-3">Unsubscribe</h1>
            <p className="text-muted-foreground mb-6">
              Click below to stop receiving emails from DG Scales.
            </p>
            <button onClick={confirm} className="btn-primary-glow w-full text-primary-foreground py-3 rounded-xl font-semibold">
              Confirm unsubscribe
            </button>
          </>
        )}
        {state === "submitting" && (
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p>Processing…</p>
          </div>
        )}
        {state === "success" && (
          <div className="flex flex-col items-center gap-3">
            <CheckCircle className="w-10 h-10 text-primary" />
            <h1 className="font-heading text-2xl font-bold text-foreground">You're unsubscribed</h1>
            <p className="text-muted-foreground">You won't receive emails from us anymore.</p>
          </div>
        )}
        {state === "already" && (
          <div className="flex flex-col items-center gap-3">
            <CheckCircle className="w-10 h-10 text-primary" />
            <h1 className="font-heading text-2xl font-bold text-foreground">Already unsubscribed</h1>
            <p className="text-muted-foreground">This email is already off our list.</p>
          </div>
        )}
        {state === "invalid" && (
          <div className="flex flex-col items-center gap-3">
            <AlertCircle className="w-10 h-10 text-destructive" />
            <h1 className="font-heading text-2xl font-bold text-foreground">Invalid link</h1>
            <p className="text-muted-foreground">This unsubscribe link is invalid or expired.</p>
          </div>
        )}
      </div>
    </div>
  );
}
