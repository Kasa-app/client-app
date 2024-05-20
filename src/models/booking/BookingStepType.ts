export type BookingStepType = {
  stepKey: string;
  stepName: string;
  component: React.ComponentType<any>;
  inputProps: any;
  onValidate?: { callback: (value: any) => boolean; key: string; }[];
};
