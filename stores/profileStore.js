export const useProfileStore = defineStore("profile-store", () => {
  // States
  const profileData = ref({});
  const clientsData = ref([]);
  const projectsData = ref([]);
  const galleryData = ref([]);
  const isLoading = ref(true);
  const url = "https://apiqrwebevents.pythonanywhere.com/api";

  // Actions
  const fetchData = async (slug) => {
    try {
      const res = await $fetch(url + "/profile/" + slug);

      const { clients, projects, gallery_images, ...newObj } = res;

      profileData.value = newObj;
      clientsData.value = clients;
      projectsData.value = projects;
      galleryData.value = gallery_images;
    } catch (error) {
      console.log(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    fetchData,
    profileData,
    clientsData,
    profileData,
    projectsData,
    galleryData,
    isLoading,
  };
});
