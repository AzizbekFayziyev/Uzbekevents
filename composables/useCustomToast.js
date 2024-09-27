// composables/useCustomToast.js
import Toast from 'vue-toastification';
import UIToast from '@/components/Common/Toast.vue'; // Correct import

const { useToast } = Toast; // Destructure useToast from the default import

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = async (text, type = 'success') => {
    // Validate toast type
    if (['success', 'error', 'info', 'warning'].includes(type)) {
      toast({
        component: UIToast, // Use UIToast component
        props: { text, type }, // Pass text and type props
      });
    } else {
      console.warn(`Unknown toast type: ${type}`);
      toast({
        component: UIToast, // Use UIToast component for default case
        props: { text, type: 'info' }, // Default to 'info' type
      });
    }
  };

  return { showToast };
};
