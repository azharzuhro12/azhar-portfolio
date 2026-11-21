import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#080A0F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#528BFF",
          fontWeight: 700,
          borderRadius: 8,
          border: "1.5px solid #1E2536",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        AZ
      </div>
    ),
    {
      ...size,
    }
  );
}

