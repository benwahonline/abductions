 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/dashboard/page.tsx
index 0000000000000000000000000000000000000000..a95c38917f2f8a9fa7f4c7fb116b1fa7d2211978 100644
--- a//dev/null
+++ b/web/app/dashboard/page.tsx
@@ -0,0 +1,32 @@
+'use client';
+import { useRouter } from 'next/navigation';
+import { useEffect, useState } from 'react';
+import { persons } from '../../data/persons';
+
+export default function Dashboard() {
+  const router = useRouter();
+  const [authorized, setAuthorized] = useState(false);
+
+  useEffect(() => {
+    const loggedIn = localStorage.getItem('loggedIn');
+    if (!loggedIn) {
+      router.push('/login');
+    } else {
+      setAuthorized(true);
+    }
+  }, [router]);
+
+  if (!authorized) return null;
+
+  return (
+    <div>
+      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
+      <p className="mb-2">Logged in! Here is the list of cases:</p>
+      <ul className="list-disc ml-5">
+        {persons.map(p => (
+          <li key={p.id}>{p.name} - {p.location}</li>
+        ))}
+      </ul>
+    </div>
+  );
+}
 
EOF
)