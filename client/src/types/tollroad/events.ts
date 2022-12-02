import {Log} from "@cosmjs/stargate/build/logs"

// export type RoadOperatorCreatedEvent = Event

export const getCreateRoadOperatorEvent = (
    log: Log,
) => {
    const event = log.events.find((e) => e.type === "new-road-operator-created")
    if (!event) {
        return undefined
    }
    return event
}

export const getCreatedRoadOperatorId = (
    createdRoadOperatorEvent,
): string => {
    console.log("getCreatedRoadOperatorId", createdRoadOperatorEvent)
    const roadOperatorIndex = createdRoadOperatorEvent.attributes.find(
        (a) => a.key === "road-operator-index",
    ).value
    console.log("roadOperatorIndex", roadOperatorIndex)
    return roadOperatorIndex
}
