import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import BookingIcon from "../../images/booking.jpg";
import Input from "../../components/Input";
import { Context } from "../../context/BookingContext";

const RegisterScreen = ({ navigation }) => {
  const { signupInfo } = useContext(Context);
  const [selectedValue, setSelectedValue] = useState("");
  const [registerParam, setRegisterParam] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [gotoLogin, setGotoLogin] = useState("");
  const [registrationForm, setRegistrationForm] = useState({
    name: {
      orientation: "landscape",
      sortIndex: 0,
      firstname: {
        type: "text",
        label: "First name",
        elementName: "firstname",
        value: "",
        width: 185,
        isPasswordSecure: false
      },
      lastname: {
        type: "text",
        label: "Last name",
        elementName: "lastname",
        value: "",
        width: 185,
        isPasswordSecure: false
      }
    },
    contact: {
      sortIndex: 1,
      orientation: "landscape",
      email: {
        type: "text",
        label: "Email",
        elementName: "email",
        value: "",
        width: 185,
        isPasswordSecure: false
      },
      phone: {
        sortIndex: 2,
        type: "text",
        label: "Phone",
        elementName: "phone",
        value: "",
        width: 185,
        isPasswordSecure: false
      }
    },
    gender: {
      sortIndex: 3,
      orientation: "landscape",
      male: {
        type: "radio",
        label: "Male",
        elementName: "male",
        isPasswordSecure: false,
        value: "m",
        width: 185
      },
      female: {
        type: "radio",
        label: "Female",
        elementName: "female",
        isPasswordSecure: false,
        value: "f",
        width: 185
      }
    },
    Security: {
      sortIndex: 4,
      orientation: "portrait",
      password: {
        type: "password",
        label: "Password",
        isPasswordSecure: true,
        elementName: "password",
        value: ""
      },
      confirmPassword: {
        type: "password",
        label: "Confirm Password",
        elementName: "confirmPassword",
        isPasswordSecure: true,
        value: ""
      }
    }
  });

  useEffect(
    () => {
      if (registerParam) {
        if (registerParam.confirmPassword === registerParam.password) {
          setError("");
          async function getData() {
            const result = await signupInfo(registerParam);
            if (result.status === 400) {
              setError(result.message);
            } else if (result.status === 200) {
              setSuccess("Successfully registered!!");
              setGotoLogin("GOTO LOGIN");
            }
          }
          getData();
        } else {
          setError("Password is not confirmed!!");
        }
      }
    },
    [registerParam]
  );

  const changeHandler = (val, elem, item) => {
    setRegistrationForm(prevRegistrationForm => ({
      ...prevRegistrationForm,
      [elem]: {
        ...prevRegistrationForm[elem],
        [item]: { ...prevRegistrationForm[elem][item], value: val }
      }
    }));
  };

  const setIsPasswordSecure = (val, elem, item) => {
    let tempForm = registrationForm;
    tempForm[elem][item].isPasswordSecure = val;
    setRegistrationForm({ ...registrationForm, ...tempForm });
  };

  const setupRegistration = () => {
    return Object.keys(registrationForm).map((elem, index) => {
      return (
        <View
          key={index}
          style={
            registrationForm[elem].orientation === "landscape"
              ? styles.landscapeStyle
              : styles.portraitStyle
          }
        >
          {getSubElements(elem)}
        </View>
      );
    });
  };

  const getSubElements = elem => {
    return Object.keys(registrationForm[elem]).map((item, index) => {
      if (item !== "orientation") {
        return (
          <View key={index}>
            <Input
              type={registrationForm[elem][item].type}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              value={registrationForm[elem][item].value}
              label={registrationForm[elem][item].label}
              placeholder={registrationForm[elem][item].label}
              isPasswordSecure={registrationForm[elem][item].isPasswordSecure}
              callBack={val => changeHandler(val, elem, item)}
              setIsPasswordSecure={res => setIsPasswordSecure(res, elem, item)}
            />
          </View>
        );
      }
    });
  };

  const save = () => {
    let flag = false;
    Object.keys(registrationForm).map(tag => {
      Object.keys(registrationForm[tag]).map(item => {
        async function gatherParam() {
          if (registrationForm[tag][item].value !== undefined) {
            if ((tag === "gender" && item === "male") || item === "female") {
              if (!flag) {
                setRegisterParam(previousParam => ({
                  ...previousParam,
                  [tag]: selectedValue
                }));
                flag = true;
              }
            } else {
              setRegisterParam(previousParam => ({
                ...previousParam,
                [item]: registrationForm[tag][item].value
              }));
            }
          }
        }
        gatherParam();
      });
    });
  };

  return (
    <View style={{ backgroundColor: "#fff", height: "100%", paddingTop: 40 }}>
      <Text style={{ alignSelf: "center", fontSize: 22 }}>
        {"PLEASE SIGN-UP"}
      </Text>
      <View>
        <Image style={styles.imageStyle} source={BookingIcon} />
      </View>
      <View>
        <Text style={styles.errorStyle}>
          {error}
        </Text>
      </View>
      <View style={styles.arrangeStyle}>
        {setupRegistration()}
        {success &&
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.loginStyle}
          >
            {gotoLogin}
          </Text>}
      </View>
      <View>
        <Text style={styles.successStyle}>
          {success}
        </Text>
      </View>
      <View style={{ width: 370, alignSelf: "center" }}>
        <TouchableOpacity
          onPress={() => save()}
          style={{
            borderRadius: 15,
            backgroundColor: "#0F5A75",
            height: 50,
            marginTop: 60
          }}
        >
          <Text
            style={{
              color: "#fff",
              alignSelf: "center",
              paddingTop: 7,
              fontSize: 20,
              textTransform: "capitalize"
            }}
          >
            {"SIGN-UP"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    color: "#D4442A",
    fontSize: 16,
    textAlign: "center"
  },
  loginStyle: {
    color: "#155A75",
    fontSize: 16,
    textAlign: "right",
    marginRight: 20
  },
  successStyle: {
    color: "#5EA13A",
    fontSize: 16,
    textAlign: "center"
  },
  landscapeStyle: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "auto",
    paddingLeft: 0,
    marginBottom: 10,
    alignSelf: "center"
  },
  portraitStyle: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 0,
    alignSelf: "center"
  },
  arrangeStyle: {
    display: "flex",
    flexDirection: "column"
  },
  imageStyle: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  }
});

export default RegisterScreen;
