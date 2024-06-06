import { getSubscription } from "@lemonsqueezy/lemonsqueezy.js";
import { useSubscriptionModal } from "./use-subscription-modal";
import { useGetSubscription } from "../api/use-get-subscription";

export const usePaywall = () => {
  const subscriptionModal = useSubscriptionModal();
  const { data: subscription, isLoading: isLoadingSubscription } =
    useGetSubscription();

  const shouldBlock = !subscription || subscription.status === "expired";

  return {
    isLoading: isLoadingSubscription,
    shouldBlock,
    triggerPaywall: () => {
      subscriptionModal.onOpen();
    },
  };
};
