import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'DG Scales'

interface ContactFormNotificationProps {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactFormNotificationEmail = ({
  name = 'Unknown',
  email = 'unknown@example.com',
  subject = '(no subject)',
  message = '(no message)',
}: ContactFormNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={text}>You received a new message from your {SITE_NAME} website.</Text>

        <Section style={card}>
          <Text style={label}>From</Text>
          <Text style={value}>{name}</Text>

          <Text style={label}>Email</Text>
          <Text style={value}>{email}</Text>

          <Text style={label}>Subject</Text>
          <Text style={value}>{subject}</Text>

          <Hr style={hr} />

          <Text style={label}>Message</Text>
          <Text style={messageText}>{message}</Text>
        </Section>

        <Text style={footer}>
          Reply directly to {email} to respond to this lead.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New lead: ${data?.name ?? 'Unknown'} — ${data?.subject ?? 'Contact form'}`,
  to: 'dgsales.business@gmail.com',
  displayName: 'Contact form notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Interested in Facebook ads',
    message: 'Hi, I run a Shopify store and would love to chat about scaling.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0a0a0a', margin: '0 0 12px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.5', margin: '0 0 20px' }
const card = { backgroundColor: '#f6f7f9', borderRadius: '12px', padding: '20px 24px' }
const label = { fontSize: '11px', color: '#8a8d93', textTransform: 'uppercase' as const, letterSpacing: '0.06em', margin: '12px 0 4px' }
const value = { fontSize: '15px', color: '#0a0a0a', margin: '0 0 8px', fontWeight: 500 }
const messageText = { fontSize: '14px', color: '#1a1a1a', whiteSpace: 'pre-wrap' as const, margin: '0' }
const hr = { borderTop: '1px solid #e3e5ea', margin: '16px 0' }
const footer = { fontSize: '12px', color: '#8a8d93', margin: '24px 0 0' }
