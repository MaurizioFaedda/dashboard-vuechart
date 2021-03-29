<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: ["data", "options", "label", "labels"],
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.data,
          },
        ],
      },
      this.options
    );
  },
};
</script>