 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/stats/page.tsx
index 0000000000000000000000000000000000000000..729f0436b7ba595f1af141eed82fc0d95b27841e 100644
--- a//dev/null
+++ b/web/app/stats/page.tsx
@@ -0,0 +1,30 @@
+'use client';
+import { Bar } from 'react-chartjs-2';
+import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
+import { persons } from '../../data/persons';
+
+ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
+
+const counts: Record<string, number> = {};
+persons.forEach(p => {
+  const year = new Date(p.dateMissing).getFullYear().toString();
+  counts[year] = (counts[year] || 0) + 1;
+});
+
+const data = {
+  labels: Object.keys(counts),
+  datasets: [{
+    label: 'Cases',
+    data: Object.values(counts),
+    backgroundColor: 'rgba(59,130,246,0.5)'
+  }]
+};
+
+export default function Stats() {
+  return (
+    <div className="max-w-lg">
+      <h1 className="text-2xl font-bold mb-4">Statistics</h1>
+      <Bar data={data} />
+    </div>
+  );
+}
 
EOF
)