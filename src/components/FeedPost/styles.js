const styles = StyleSheet.create({
    post: {
      width: "100%",
      marginVertical: 7,
      backgroundColor: "#fff",
    },
  
    //header
    header: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    name: {
      fontWeight: "500",
    },
    subtitle: {
      color: "grey",
    },
    icon: {
      marginLeft: "auto",
    },
  
    //body
    description: {
      paddingHorizontal: 10,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    image:{
      width: "100%",
      aspectRatio: 1,
      marginTop: 10,
    },
  
    //footer
    footer: {
      paddingHorizontal: 10,
    },
    statsRow: {
      paddingVertical: 10,
      flexDirection: "row",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: "lightgray",
    },
    likeIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
    likedBy: {
      color: "gray",
    },
    shares: {
      marginLeft: "auto",
      color: "gray",
    },
  
    //Buttons row
    buttonsRow: {
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    iconButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconButtonText: {
      marginLeft: 5,
      color: "gray",
      fontWeight: "500",
    }
  });

export default styles;