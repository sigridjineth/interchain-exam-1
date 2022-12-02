import { Attribute, Event, Log } from "@cosmjs/stargate/build/logs"

export type RoadOperatorCreatedEvent = Event

export const getCreateRoadOperatorEvent = (
    log: Log,
): RoadOperatorCreatedEvent | undefined => {
    if (log.events.length !== 1) {
        return undefined
    }
    const event = log.events[0]
    if (event.type !== "tollroad/RoadOperatorCreated") {
        return undefined
    }
    return event
}

export const getCreatedRoadOperatorId = (
    createdRoadOperatorEvent: RoadOperatorCreatedEvent,
): string => {
    const attribute = createdRoadOperatorEvent.attributes.find(
        (attribute) => attribute.key === "index",
    )
    if (!attribute) {
        throw new Error("Missing index attribute")
    }
    return attribute.value
}
