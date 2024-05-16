<template>
  <div>
    <div
      v-for="(job, index) in filteredJobs"
      v-bind:key="job.jobLink"
      class="my-5"
    >
      <v-card class="mx-auto" max-width="344" outlined color="#59C3C3">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">Job {{ index + 1 }}</div>
            <v-list-item-title class="text-h5 mb-1">
              {{ job.company_name }}
            </v-list-item-title>
            <v-list-item-subtitle
              >{{ job.job_title }} <br />{{ job.salary }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions class="d-flex flex-row-reverse">
          <v-btn outlined rounded text>
            <a :href="job.jobLink" target="”_blank”">Get Link</a>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
import { jobsList } from "../JobsList";
import { ExperienceCategory } from "./Constants";

const props = defineProps({
  selectedDomain: {
    type: String,
    required: true,
  },
  selectedSpecialization: {
    type: String,
    required: true,
  },
  yearsExperience: {
    type: String,
    required: true,
  },
});
const filteredJobs = computed(() => {
  return jobsList.filter(
    (job) =>
      job.domain === props.selectedDomain &&
      job.specialization === props.selectedSpecialization &&
      job.experience_category.includes(props.yearsExperience)
  );
});
</script>
<style scoped>
a {
  text-decoration: none;
  color: #52489c;
}
</style>
