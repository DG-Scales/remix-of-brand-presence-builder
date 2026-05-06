import { corsHeaders } from '@supabase/supabase-js/cors'

const RECIPIENT_EMAIL = "dgsales.business@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Truncate inputs for safety
    const safeName = String(name).slice(0, 200);
    const safeEmail = String(email).slice(0, 255);
    const safeSubject = String(subject).slice(0, 500);
    const safeMessage = String(message).slice(0, 5000);

    // Send email notification using Resend-compatible API or log for now
    // For a real implementation, you'd integrate with an email service
    // For now, we store in the database and send a notification via the Supabase client
    
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store the submission
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: safeName,
        email: safeEmail,
        subject: safeSubject,
        message: safeMessage,
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Contact form submission from ${safeName} (${safeEmail}): ${safeSubject}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Your message has been received. We will get back to you soon!' 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
