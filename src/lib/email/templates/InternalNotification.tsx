import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Field {
  label: string;
  value: string;
}

interface InternalNotificationProps {
  category: string;
  submittedAt: string;
  fields: Field[];
  message?: string;
}

const INDIGO = "#1800ad";
const PEACH = "#ffbd59";
const INK = "#0d0a2c";

export function InternalNotification({
  category,
  submittedAt,
  fields,
  message,
}: InternalNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>{`New ${category} submission via abzcapital.co.ke`}</Preview>
      <Body style={{ background: "#f5f3ff", fontFamily: "Inter, Helvetica, Arial, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ background: "#ffffff", borderRadius: 16, maxWidth: 560, margin: "0 auto", overflow: "hidden" }}>
          <Section style={{ background: INDIGO, padding: "28px 32px" }}>
            <Text style={{ color: PEACH, fontSize: 11, letterSpacing: 2, margin: 0, textTransform: "uppercase", fontWeight: 700 }}>
              ABZ Capital · New lead
            </Text>
            <Heading style={{ color: "#ffffff", fontSize: 22, margin: "8px 0 0", fontWeight: 800 }}>
              {category}
            </Heading>
          </Section>

          <Section style={{ padding: "28px 32px" }}>
            <Text style={{ color: INK, fontSize: 13, margin: 0 }}>
              Received {submittedAt}
            </Text>
            <Hr style={{ borderColor: "#e5e7eb", margin: "18px 0" }} />

            {fields.map((f) => (
              <div key={f.label} style={{ marginBottom: 14 }}>
                <Text style={{ color: "#6b7280", fontSize: 11, letterSpacing: 1, margin: 0, textTransform: "uppercase", fontWeight: 600 }}>
                  {f.label}
                </Text>
                <Text style={{ color: INK, fontSize: 14, margin: "4px 0 0", fontWeight: 500, whiteSpace: "pre-wrap" }}>
                  {f.value}
                </Text>
              </div>
            ))}

            {message ? (
              <>
                <Hr style={{ borderColor: "#e5e7eb", margin: "18px 0" }} />
                <Text style={{ color: "#6b7280", fontSize: 11, letterSpacing: 1, margin: 0, textTransform: "uppercase", fontWeight: 600 }}>
                  Message
                </Text>
                <Text style={{ color: INK, fontSize: 14, margin: "8px 0 0", lineHeight: 1.55, whiteSpace: "pre-wrap" }}>
                  {message}
                </Text>
              </>
            ) : null}

            <Hr style={{ borderColor: "#e5e7eb", margin: "20px 0 16px" }} />
            <Text style={{ color: "#6b7280", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
              Submitted via abzcapital.co.ke. Reply to this email to respond to the applicant directly.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default InternalNotification;
