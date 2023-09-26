import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewBase,
  TouchableOpacityComponent,
  TouchableHighlightBase,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { announcements, IAnnoucement } from "./annoucements";
import { Calendar, LocaleConfig } from "react-native-calendars";
let screen_width = Dimensions.get("screen").width;
let screen_height = Dimensions.get("screen").height;

const Stack = createNativeStackNavigator();

export function CalendarView() {
  return (
    <Calendar
      style={{
        width: "100%",
        height: 100,
      }}
      onPress={(day) => {
        console.log(day?.dateString);
      }}
    />
  );
}

export function AnnoucementView() {
  return (
    <>
      {announcements.map((announcement: IAnnoucement, key: number) => {
        return (
          <View style={styles.announcement} key={key}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {announcement.title}
            </Text>
            <Text style={{ fontSize: 13 }}>
              {announcement.announcement_body}
            </Text>
          </View>
        );
      })}
    </>
  );
}

export function InfoView() {
  return (
    <SafeAreaView>
      <Text>Info View</Text>
    </SafeAreaView>
  );
}

export function OptionsView() {
  return (
    <View>
      <Text>Hello Worlld</Text>
    </View>
  );
}

export default function App() {
  const [showCalender, setShowCalender] = useState(false);
  const [current_open_page, set_current_open_page] = useState("Announcements");
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>{current_open_page}</Text>
          {/* {!showCalender ? <AnnoucementView /> : <CalendarView />} */}
          {current_open_page == "Options" ? (
            <OptionsView />
          ) : current_open_page == "Annoucements" ? (
            <AnnoucementView />
          ) : current_open_page == "Calendar" ? (
            <CalendarView />
          ) : (
            <InfoView />
          )}
        </SafeAreaView>
        <StatusBar style="auto" />
        <View style={styles.bottom_menu}>
          <View style={styles.bottom_menu_options}>
            <Button
              onPress={() => {
                setShowCalender(true);
                set_current_open_page("Calendar");
              }}
              title="Calender"
            />
          </View>
          <View style={styles.bottom_menu_options}>
            <Button
              onPress={() => {
                set_current_open_page("Options");
              }}
              title="Options"
            />
          </View>
          <View style={styles.bottom_menu_options}>
            <Button
              onPress={() => {
                set_current_open_page("Info");
              }}
              title="Info"
            />
          </View>
        </View>
      </View>
    </>
  );
}
const tempView = `
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
          <TouchableHighlight>
            <Text>Hello World</Text>
          </TouchableHighlight>
          <Text style={styles.title}>Annoucements</Text>
          {announcements.map((announcement: IAnnoucement, key: number) => {
            return (
              <View style={styles.announcement} key={key}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {announcement.title}
                </Text>
                <Text style={{ fontSize: 13 }}>
                  {announcement.announcement_body}
                </Text>
              </View>
            );
          })}
        </SafeAreaView>
        <StatusBar style="auto" />
        <View style={styles.bottom_menu}>
          <View style={styles.bottom_menu_options}>
            <Button
              onPress={() => console.log("button pressed")}
              title="Calender"
            />
          </View>
          <View style={styles.bottom_menu_options}>
            <Text>Options</Text>
          </View>
          <View style={styles.bottom_menu_options}>
            <Text>School Info</Text>
          </View>
        </View>
      </View>
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: Dimensions.get("screen").height,
  },
  bottom_menu: {
    backgroundColor: "darkred",
    height: 100,
    width: Dimensions.get("screen").width,
    position: "absolute",
    bottom: 0,
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    padding: 10,
    // marginBottom: 10,
  },
  bottom_menu_options: {
    width: 100,
    height: 60,
    borderRadius: 5,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  announcement: {
    width: "90%",
    height: "25%",
    backgroundColor: "grey",
    margin: 8,
    padding: 10,
    borderRadius: 5,
    overflow: "scroll",
  },
});
