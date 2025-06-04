 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/login/page.tsx
index 0000000000000000000000000000000000000000..fc43c18dc42c25d34b386fa130467589cb766f53 100644
--- a//dev/null
+++ b/web/app/login/page.tsx
@@ -0,0 +1,26 @@
+'use client';
+import { useState } from 'react';
+import { useRouter } from 'next/navigation';
+
+export default function Login() {
+  const router = useRouter();
+  const [username, setUsername] = useState('');
+  const [password, setPassword] = useState('');
+
+  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
+    e.preventDefault();
+    if (username && password) {
+      localStorage.setItem('loggedIn', 'true');
+      router.push('/dashboard');
+    }
+  }
+
+  return (
+    <form onSubmit={handleSubmit} className="space-y-2 max-w-xs">
+      <h1 className="text-2xl font-bold">Login</h1>
+      <input className="border p-2 w-full" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
+      <input className="border p-2 w-full" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
+      <button className="bg-blue-500 text-white px-4 py-2" type="submit">Login</button>
+    </form>
+  );
+}
 
EOF
)