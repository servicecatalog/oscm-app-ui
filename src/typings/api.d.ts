export type ProvisioningStatus = 'WAITING_FOR_SYSTEM_CREATION' | 'COMPLETED';

export interface InstanceAttribute {
  id: number;
  key: string;
  value: string;
}

export interface InstanceParameter {
  id: number;
  key: string;
  value: string;
}

export interface Instance {
  id: number;
  controllerId: string;
  instanceId: string;
  attributes: InstanceAttribute[];
  organizationName: string;
  parameters: InstanceParameter[];
  provisioningMsg: string;
  provisioningStatus: string | ProvisioningStatus;
  referenceId: string;
  requestTime: string | Date;
  subscriptionId: string;
}

export interface Controller {
  controllerId: string;
  description: string;
}

export interface Configuration {
  id: number;
  description: string;
  controllerId: string;
  organizationId: string;
}

export interface ConfigurationSettings {
  id: number;
  key: string;
  value: string;
}
