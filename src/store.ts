import mqtt from 'mqtt'

/**
 * 存储的变量
 *
 * */
export type storeData = {
}

export let publishClient: mqtt.Client
export let subscribeClient: mqtt.Client

export const bindingPublishClient = (client: mqtt.Client) => {
  publishClient = client
}

export const bindingSubscribeClient = (client: mqtt.Client) => {
  subscribeClient = client
}
