import axios from 'axios';

export const useProfileStore = defineStore("profile-store", () => {
  // API URL
  const config = useRuntimeConfig();
  const url = config.public.API_URL;

  // States
  const profileData = ref({});
  const clientsData = ref([]);
  const projectsData = ref([]);
  const galleryData = ref([]);

  // Colors
  const colors = ref({
    primary: "#692B58",
    hoverColor: "#00D4C5",
    secondary: "#F9BF41",
  });

  // Html
  const htmlData = ref(null);

  // Actions
  const fetchData = async (slug) => {
    try {
      const res = await axios.get(`${url}/profile/${slug}`);

      const {
        clients,
        projects,
        gallery_images,
        color,
        color_hover,
        html,
        ...data
      } = res.data;

      colors.value.primary = color;
      colors.value.hoverColor = color_hover;
      htmlData.value = html;
      profileData.value = data;
      clientsData.value = clients;
      projectsData.value = projects;
      galleryData.value = gallery_images;

      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchData,
    profileData,
    clientsData,
    projectsData,
    galleryData,
    colors,
    htmlData,
  };
});
