export const handleAppleSignIn = () => {
    if (!window.AppleID) {
      console.warn("AppleID not available");
      return;
    }
  
    window.AppleID.auth.init({
      clientId: "YOUR_APPLE_CLIENT_ID",
      scope: "name email",
      redirectURI: "YOUR_REDIRECT_URI",
      state: "state",
    });
  
    window.AppleID.auth.signIn().then((response) => {
      console.log("Apple Sign-In Response:", response);
    });
  };

  