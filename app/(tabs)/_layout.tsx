import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

import { useTheme } from "@/theme/useTheme";

export default function TabsLayout() {
  const { theme } = useTheme();

  const c = theme.colors;

  return (
    <Tabs
      screenOptions={{
        /*
        |--------------------------------------------------------------------------
        | HEADER
        |--------------------------------------------------------------------------
        */

        headerShown: false,

        /*
        |--------------------------------------------------------------------------
        | COLORES DE LAS TABS
        |--------------------------------------------------------------------------
        */

        tabBarActiveTintColor: c.primary,

        tabBarInactiveTintColor: c.textMuted,

        tabBarActiveBackgroundColor: c.primarySubtle,

        tabBarInactiveBackgroundColor: c.backgroundSecondary,

        /*
        |--------------------------------------------------------------------------
        | BARRA INFERIOR
        |--------------------------------------------------------------------------
        */

        tabBarStyle: {
          backgroundColor: c.backgroundSecondary,

          borderTopColor: c.border,

          borderTopWidth: 1,

          height:
            Platform.OS === "android"
              ? 68
              : 82,

          paddingTop: 6,

          paddingBottom:
            Platform.OS === "android"
              ? 8
              : 20,

          elevation:
            theme.dark
              ? 12
              : 8,

          shadowColor: c.shadow,

          shadowOpacity:
            theme.dark
              ? 0.4
              : 0.12,

          shadowRadius: 8,

          shadowOffset: {
            width: 0,
            height: -2,
          },
        },

        /*
        |--------------------------------------------------------------------------
        | CADA TAB
        |--------------------------------------------------------------------------
        */

        tabBarItemStyle: {
          borderRadius: 10,

          marginHorizontal: 4,

          marginVertical: 4,
        },

        /*
        |--------------------------------------------------------------------------
        | TEXTO
        |--------------------------------------------------------------------------
        */

        tabBarLabelStyle: {
          fontSize: 12,

          fontWeight: "600",

          marginTop: 2,
        },

        /*
        |--------------------------------------------------------------------------
        | CONTENIDO DE LA PANTALLA
        |--------------------------------------------------------------------------
        */

        sceneStyle: {
          backgroundColor: c.background,
        },
      }}
    >
      {/*
      |--------------------------------------------------------------------------
      | VENTA
      |--------------------------------------------------------------------------
      */}

      <Tabs.Screen
        name="venta"
        options={{
          title: "Venta",

          tabBarIcon: ({
            color,
            size,
            focused,
          }) => (
            <Ionicons
              name={
                focused
                  ? "ticket"
                  : "ticket-outline"
              }
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/*
      |--------------------------------------------------------------------------
      | ENCOMIENDAS
      |--------------------------------------------------------------------------
      */}

      <Tabs.Screen
        name="encomiendas"
        options={{
          title: "Encomiendas",

          tabBarIcon: ({
            color,
            size,
            focused,
          }) => (
            <Ionicons
              name={
                focused
                  ? "cube"
                  : "cube-outline"
              }
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/*
      |--------------------------------------------------------------------------
      | PERFIL
      |--------------------------------------------------------------------------
------
      */}

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",

          tabBarIcon: ({
            color,
            size,
            focused,
          }) => (
            <Ionicons
              name={
                focused
                  ? "person"
                  : "person-outline"
              }
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}