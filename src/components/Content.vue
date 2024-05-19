<template>
  <div>
    <div class="d-flex mx-3">
      <v-select
        v-model="selectedDomain"
        :items="domainsList"
        label="Domain"
        class="mx-3 my-3"
        dense
      ></v-select>
      <v-select
        :disabled="isSpecializationDropdownDisabled"
        v-model="selectedSpecialization"
        :items="specializationList"
        label="Specialization"
        class="mx-3 my-3"
        dense
      ></v-select>
    </div>
    <div class="mx-3">
      <v-select
        v-model="yearsExperience"
        :items="yearsExperienceList"
        label="Years of Experience"
        class="mx-3 mb-3"
        dense
      ></v-select>
    </div>
    <jobs-list
      :selectedDomain="selectedDomain"
      :selectedSpecialization="selectedSpecialization"
      :yearsExperience="yearsExperience"
    />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import {
  specializationsData,
  ExperienceCategory,
  DomainWithoutSpecialization,
} from "./Constants";
import JobsList from "./JobsList.vue";

const selectedDomain = ref(null);
const selectedSpecialization = ref(null);
const yearsExperience = ref(null);
// Define the items for the v-select component
const domainsList = ref([
  "Frontend",
  "Backend",
  "Fullstack",
  "QA",
  "Devops",
  "Data Analyst",
  "Magento",
  "Salesforce",
]);

const isSpecializationDropdownDisabled = computed(
  () =>
    !selectedDomain.value ||
    DomainWithoutSpecialization.includes(selectedDomain.value)
);
const specializationList = computed(
  () => specializationsData[selectedDomain.value]
);

const yearsExperienceList = Object.values(ExperienceCategory);
</script>

<style scoped>
.content {
  margin: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
