<template>
    <div id="date">
        <div id="nailbar">
            <div class="nail"></div>
            <div class="nail"></div>
        </div>
        <div id="content">
            <div id="month-name" class="text">{{ monthName }}</div>
            <div id="day" class="text">{{ day }}</div>
            <div id="day-name" class="text">{{ dayName }}</div>
            <div id="year" class="text">{{ year }}</div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

function pad(n) {
    return n < 10 ? "0" + n : n;
}

const localization = "nl-NL";

export default defineComponent({
    name: "DateBlock",
    props: {
        value: {
            type: String,
            default: null,
        },
    },
    computed: {
        /** @type {Date} */
        date() {
            return new Date(this.value.toString());
        },
        year() {
            return this.date.getFullYear();
        },
        month() {
            return pad(this.date.getMonth() + 1);
        },
        day() {
            return pad(this.date.getDate());
        },
        hour() {
            return pad(this.date.getHours());
        },
        minute() {
            return pad(this.date.getMinutes());
        },
        monthName() {
            return "September";
            const options = { month: "short" };
            return this.date.toLocaleDateString(localization, options).toString();
        },
        dayName() {
            const options = { weekday: "long" };
            return this.date.toLocaleDateString(localization, options).toString();
        },
        text() {
            if (this.value === null) return null;

            const options = {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };

            const date = new Date(this.value.toString());
            const string = date.toLocaleDateString("nl-NL", options).toString();

            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
});
</script>

<style scoped>
@font-face {
    font-family: CutiveMono;
    src: url(../css/fonts/CutiveMono.ttf);
}

#nailbar {
    background-color: red;
    width: 100%;
    height: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-shrink: 0;
}

.nail {
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 10px;
}

#content {
    display: flex;
    flex-direction: column;
}

.text {
    text-align: center;
    width: 100%;
    font-family: "CutiveMono";
    height: 1.1em;
}

#month-name,
#day-name {
    text-transform: uppercase;
    font-size: 0.8em;
}

#day {
    font-size: 1.2em;
    font-weight: bold;
}

#year {
    font-size: 0.6em;
}

#date {
    background-color: white;
    border-bottom: 3px solid gray;

    display: flex;
    flex-direction: column;

    height: 5em;
    width: 70px;

    opacity: 0.4;
}
</style>
