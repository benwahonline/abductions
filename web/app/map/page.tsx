 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/map/page.tsx
index 0000000000000000000000000000000000000000..f3fcd032d53029c5c28f4b96b79d3506c3b9c9d8 100644
--- a//dev/null
+++ b/web/app/map/page.tsx
@@ -0,0 +1,12 @@
+'use client';
+import nextDynamic from 'next/dynamic';
+
+const MapClient = nextDynamic(() => import('./MapClient'), { ssr: false });
+
+export default function MapPage() {
+  return (
+    <div className="h-[500px]">
+      <MapClient />
+    </div>
+  );
+}
 
EOF
)