class TrackingService {
    constructor() {
        this.events = [];
    }

    track(eventName, eventData) {
        const event = {
            name: eventName,
            data: eventData,
            timestamp: new Date(),
        };
        this.events.push(event);
    }

    getEvents() {
        return this.events;
    }

    clearEvents() {
        this.events = [];
    }
}

export default new TrackingService();