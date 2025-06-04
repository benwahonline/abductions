 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/layout.tsx
index 0000000000000000000000000000000000000000..7865cce018c8bc37cb766dc39984e39ed765525a 100644
--- a//dev/null
+++ b/web/app/layout.tsx
@@ -0,0 +1,23 @@
+import type { Metadata } from "next";
+import "./globals.css";
+import Navbar from "../components/Navbar";
+
+export const metadata: Metadata = {
+  title: "Tanganyikan",
+  description: "Missing and abducted persons in Tanzania",
+};
+
+export default function RootLayout({
+  children,
+}: Readonly<{
+  children: React.ReactNode;
+}>) {
+  return (
+    <html lang="en">
+      <body className="antialiased">
+        <Navbar />
+        <main className="p-4">{children}</main>
+      </body>
+    </html>
+  );
+}
 
EOF
)