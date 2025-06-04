 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/contact/page.tsx
index 0000000000000000000000000000000000000000..71a66cfd14f5c68276b678389b3620d4c058470c 100644
--- a//dev/null
+++ b/web/app/contact/page.tsx
@@ -0,0 +1,27 @@
+'use client';
+import { useState } from 'react';
+
+export default function Contact() {
+  const [submitted, setSubmitted] = useState(false);
+  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
+    e.preventDefault();
+    setSubmitted(true);
+  }
+  return (
+    <div className="space-y-4 max-w-md">
+      <h1 className="text-2xl font-bold">Contact Us</h1>
+      {submitted ? (
+        <p className="text-green-600">Thanks for reaching out!</p>
+      ) : (
+        <form onSubmit={handleSubmit} className="space-y-2">
+          <input className="border p-2 w-full" placeholder="Name" required />
+          <input className="border p-2 w-full" placeholder="Email" required />
+          <textarea className="border p-2 w-full" placeholder="Message" required />
+          <button className="bg-blue-500 text-white px-4 py-2" type="submit">
+            Send
+          </button>
+        </form>
+      )}
+    </div>
+  );
+}
 
EOF
)