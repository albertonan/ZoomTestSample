export default {
    menu: {
        config: "Configuración",
        monitoring: "Monitorización",
        control: "Control de salas",
        rooms: "Salas",
        recordings: "Grabaciones"
    },
    buttons: {
        details: "Detalles",
        createconf: "Crear conferencia",
        delete: "Eliminar",
        createroom: "Create room",
        cancel: "Cancelar",
        accept: "Aceptar",
        add: "Añadir",
        record: "Grabar",
        stopRecord: "Detener grabación"

    },
    languages:{
        title: "Idioma",
        spanish: "Español",
        english: "Inglés",
        selected: "Seleccionado"
    },
    user:{
        logout: "Cerrar sesión",
        account: "Cuenta"
    },
    conferences: {
        roomnumber: "Número de salas",
        activecalls: "Llamadas activas",
        tableFields: [
            { key: "name", label: "Nombre"},
            { key: "rooms", label: "Salas" },
            { key: "calls", label: "Llamadas activas"},
            { key: "actions", label: "Acciones" },
          ],
        roomFields: [
            { key: "number", label: "Número de sala"},
                { key: "name", label: "Sala"},
                { key: "maxusers", label: "Número máximo de usuarios" },
                { key: "calls", label: "Llamadas activas"},
                { key: "actions", label: "Acciones",},
              ]
    },
    rooms: {
        title: "Detalles de la conferencia: ",
        createTitle: "Crear sala",
        deleteTitle: "Eliminar sala",
        deleteBody: "¿Estás seguro de eliminar la sala ",
        participants: "Número de usuarios",
        activecalls: "Llamada en progreso: ",
        nocalls: "No hay llamadas activas",
        connectedusers: "Usuarios conectados:",
        newroom: {
            dn: "Nombre",
            pin: "Número de la sala",
            channels: "Numero máximo de usuarios"
        }
    },
    monitoring: {
        devicelist: "Registered devices",
        conferences: "Conferencias",
        info: "Información del PBX",
        alarmlist: "Alarmas",
        uptime: "Tiempo activo",
        status: "Estado",
        active: "Activo",
        unactive: "Inactivo",
        date: "Fecha del PBX",
        activecalls: "Llamadas en progreso totales",
        alarms: "Alarmas activas",
        alarmFields: [
            { key: "type", label: "Tipo"},
            { key: "time", label: "Fecha" },
            { key: "code", label: "Código" },
            { key: "severity", label: "Importancia"},
            { key: "active", label: "Estado" },
            { key: "text", label: "Descripción",},
          ],
          deviceFields: [
              { key: "device", label: "Dispositivo", class: "text-center"},       
              { key: "address", label: "Dirección IP",},
              { key: "type", label: "Tipo", },
              { key: "longname", label: "Nombre completo", },
              { key: "name", label: "Nombre", }, 
              { key: "product", label: "Producto", },
              { key: "video", label: "Video", },
              { key: "collab", label: "Collab", },
              { key: "activity", label: "Activity", },
            ],
          device: {
              connected: "Conectado",
              disconnected: "Desconectado"
          }
    },
    control: {
        modalTitle: "Selecciona un usuario",
        modal: {
            accept: "Aceptar",
            cancel: "Cancelar",
            deleteRoomsTitle: "Eliminar salas",
            deleteRoomsMessage: "¿Seguro que quieres borrar las salas seleccionadas?",
            deleteRoomMessage: "¿Seguro que quieres borrar la sala seleccionada?",
            clearCallTitle: "Colgar llamada",
            clearCallMessage: "¿Seguro que quieres colgar esta llamada?"
        },
        searchPlaceholder: "Busca un usuario",
        addUser: "Añadir usuario",
        hangUp: "Colgar",
        room: "Sala",
        actions: {
            title: "Acciones",
            divide: "Dividir",
            refresh: "Recargar",
            delete: "Borrar",
            join: "Unir"
        },
        noUsersConnected: "Sin usuarios conectados",
        join:{
            modalTitle: "Unir salas",
            name: "Nombre",
            number: "Número",
            maxUsers: "Número máximo de usuarios"
        },
        divide: {
            modalTitle: "Dividir sala",
            roomUsers: "Usuarios de la sala",
            name: "Nombre",
            number: "Número",
            maxUsers: "Número máximo de usuarios",
            delete: "Eliminar",
            createRooms: "Crear salas"
        }
    },
    recordings: {
        disk: {
            info: "Información del Flash disk",
            totalspace: "Espacio total",
            freespace: "Espacio disponible",
            usedspace: "Espacio usado",
            totalfiles: "Archivos totales",
            in: " archivos en ",
            folders: " directorios"
        },
        startrecord: "Grabar",
    }
};