import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface AutoReplyProps {
  name: string;
  category: string;
  intro?: string;
  whatsappUrl: string;
}

const INDIGO = "#1800ad";
const PEACH = "#ffbd59";
const INK = "#0d0a2c";

export function AutoReply({ name, category, intro, whatsappUrl }: AutoReplyProps) {
  const firstName = name.trim().split(" ")[0] || "there";

  return (
    <Html>
      <Head />
      <Preview>{`Thanks ${firstName} — we received your ${category}`}</Preview>
      <Body style={{ background: "#f5f3ff", fontFamily: "Inter, Helvetica, Arial, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ background: "#ffffff", borderRadius: 16, maxWidth: 560, margin: "0 auto", overflow: "hidden" }}>
          <Section style={{ background: `linear-gradient(135deg, ${INDIGO}, #3a1ccc)`, padding: "32px 32px 28px" }}>
            <Text style={{ color: PEACH, fontSize: 11, letterSpacing: 2, margin: 0, textTransform: "uppercase", fontWeight: 700 }}>
              ABZ Capital
            </Text>
            <Heading style={{ color: "#ffffff", fontSize: 22, margin: "8px 0 0", fontWeight: 800, lineHeight: 1.2 }}>
              Hi {firstName}, we&rsquo;ve got your {category}.
            </Heading>
          </Section>

          <Section style={{ padding: "28px 32px" }}>
            <Text style={{ color: INK, fontSize: 15, margin: 0, lineHeight: 1.6 }}>
              {intro ||
                `Thanks for reaching out. A team member at ABZ Capital will get back to you within one business day with next steps.`}
            </Text>

            <Text style={{ color: INK, fontSize: 15, margin: "16px 0 0", lineHeight: 1.6 }}>
              Need something faster? We respond fastest on WhatsApp.
            </Text>

            <div style={{ textAlign: "center", margin: "24px 0 12px" }}>
              <Button
                href={whatsappUrl}
                style={{
                  background: "#25d366",
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Continue on WhatsApp
              </Button>
            </div>

            <Hr style={{ borderColor: "#e5e7eb", margin: "20px 0 16px" }} />
            <Text style={{ color: "#6b7280", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
              ABZ Capital Limited · Solaret Building, Utawala, Nairobi · +254 141 576 254
              <br />
              You&rsquo;re receiving this because you submitted a request via abzcapital.co.ke.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default AutoReply;
