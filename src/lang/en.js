export default {
    menu: {
        config: "Configuration",
        monitoring: "Monitoring",
        control: "Room control",
        rooms: "Rooms",
        recordings: "Recordings"
    },
    buttons: {
        details: "Details",
        createconf: "Create conference",
        delete: "Delete room",
        createroom: "Create room",
        cancel: "Cancel",
        accept: "Accept",
        add: "Add",
        record: "Record",
        stopRecord: "Stop recording"
    },
    languages:{
        title: "Language",
        spanish: "Spanish",
        english: "English",
        selected: "Selected"
    },
    user:{
        logout: "Logout",
        account: "Account"
    },
    conferences: {
        roomnumber: "Number of rooms",
        activecalls: "Active calls",
        tableFields: [
            { key: "name", label: "Name"},
            { key: "rooms", label: "Rooms" },
            { key: "calls", label: "Active calls"},
            { key: "actions", label: "Actions",},
          ],
        roomFields: [
                { key: "number", label: "Number"},
                { key: "name", label: "Room"},
                { key: "maxusers", label: "Max number of users" },
                { key: "calls", label: "Active calls"},
                { key: "actions", label: "Actions",},
              ]
    },
    rooms: {
        title: "Conference details: ",
        createTitle: "Create room",
        deleteTitle: "Delete room",
        deleteBody: "Are you sure to delete the room ",
        participants: "Max number of users",
        activecall: "Call in progress: ",
        nocalls: "No active call",
        connectedusers: "Connected users:",
        newroom: {
            dn: "Name",
            pin: "Number",
            channels: "Max number of users"
        }
    },
    monitoring: {
        devicelist: "Registered devices",
        info: "PBX Information",
        conferences: "Conferences",
        alarmlist: "Alarms",
        uptime: "Uptime",
        status: "Status",
        active: "Active",
        unactive: "Unactive",
        date: "PBX Date",
        activecalls: "Current total active calls",
        alarms: "Active alarms",
        alarmFields: [
            { key: "type", label: "Type"},
            { key: "time", label: "Date" },
            { key: "code", label: "Code"},
            { key: "severity", label: "Severity"},
            { key: "active", label: "Status" },
            { key: "text", label: "Description",},
          ],
        deviceFields: [
            { key: "device", label: "Device", class: "text-center"},       
            { key: "address", label: "Address",},
            { key: "type", label: "Type", },
            { key: "longname", label: "Long Name", },
            { key: "name", label: "Name", }, 
            { key: "product", label: "Product", },
            { key: "video", label: "Video", },
            { key: "collab", label: "Collab", },
            { key: "activity", label: "Activity", },
          ],
        device: {
            connected: "Connected",
            disconnected: "Disconnected"
        }
    },
    control: {
        modalTitle: "Select an user",
        modal: {
            accept: "Accept",
            cancel: "Cancel",
            deleteRoomsTitle: "Delete rooms",
            deleteRoomsMessage: "Are you sure you want to delete the selected rooms?",
            deleteRoomMessage: "Are you sure you want to delete the selected room?",
            clearCallTitle: "Hang up call",
            clearCallMessage: "Are you sure you want to hang up this call?"
        },
        searchPlaceholder: "Search an user",
        addUser: "Add user",
        hangUp: "Hang up",
        room: "Room",
        actions: {
            title: "Actions",
            divide: "Divide",
            refresh: "Refresh",
            delete: "Delete",
            join: "Join"
        },
        noUsersConnected: "No users connected",
        join:{
            modalTitle: "Join rooms",
            name: "Name",
            number: "Number",
            maxUsers: "Max number of users"
        },
        divide: {
            modalTitle: "Split room",
            roomUsers: "Room users",
            name: "Name",
            number: "Number",
            maxUsers: "Max number of users",
            delete: "Delete",
            createRooms: "Create rooms"
        }
    },
    recordings: {
        disk: {
            info: "Flash disk information",
            totalspace: "Total space",
            freespace: "Avaiable free space",
            usedspace: "Used space",
            totalfiles: "Total of files",
            in: " files in ",
            folders: " directories"
        },
        startrecord: "Record",
    }
};