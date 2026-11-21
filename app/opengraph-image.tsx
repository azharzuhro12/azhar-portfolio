import { ImageResponse } from "next/og";

export const alt = "Azhar Zuhro - AI Engineer & Machine Learning Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080A0F",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient Top Glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(82, 139, 255, 0.12)",
            filter: "blur(90px)",
          }}
        />

        {/* Header Monogram & Status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                backgroundColor: "#10131B",
                border: "2px solid #1E2536",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              AZ
            </div>
            <span style={{ color: "#94A3B8", fontSize: "20px", fontWeight: 500 }}>
              azharzuhro.vercel.app
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "#10131B",
              border: "1px solid #1E2536",
              color: "#34D399",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#34D399",
              }}
            />
            Available for AI/ML Roles
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "56px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em" }}>
            Azhar Zuhro
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#528BFF",
              letterSpacing: "-0.01em",
            }}
          >
            AI Engineer & Machine Learning Engineer
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#94A3B8",
              maxWidth: "850px",
              lineHeight: 1.5,
            }}
          >
            Predictive Modeling &bull; Computer Vision &bull; Generative AI & RAG &bull; FastAPI Microservices
          </div>
        </div>

        {/* Footer Metrics Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            paddingTop: "24px",
            borderTop: "1px solid #1E2536",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF" }}>648K+</span>
            <span style={{ fontSize: "14px", color: "#64748B" }}>Records Modeled</span>
          </div>
          <div style={{ width: "1px", height: "36px", backgroundColor: "#1E2536" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "24px", fontWeight: 700, color: "#528BFF" }}>13.09%</span>
            <span style={{ fontSize: "14px", color: "#64748B" }}>Validation WAPE</span>
          </div>
          <div style={{ width: "1px", height: "36px", backgroundColor: "#1E2536" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF" }}>16+</span>
            <span style={{ fontSize: "14px", color: "#64748B" }}>Commercial Orders</span>
          </div>
          <div style={{ width: "1px", height: "36px", backgroundColor: "#1E2536" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF" }}>3.70</span>
            <span style={{ fontSize: "14px", color: "#64748B" }}>GPA (Informatics Eng.)</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
