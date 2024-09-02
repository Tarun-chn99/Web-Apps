
### **InstaFood: Your Go-To Instant Food Ordering App**

**InstaFood** brings you the ultimate food ordering experience by displaying real-time restaurant data powered by live APIs. Enjoy a seamless browsing and ordering process tailored to your location!

- **Personalized Experience**: Choose your area within the city, and instantly discover local restaurants.
- **Easy Account Management**: Create an account effortlessly with your mobile number and securely log in via OTP verification.
- **Browse and Order with Ease**: Explore a variety of restaurant menus and add your favorite items to your cart in just a few taps.


### **Key Features**

- **Real-Time Data**: Leverages live APIs for up-to-date restaurant information.
- **Location-Based Discovery**: Automatically shows restaurants near your selected area.
- **Powerful Filtering**: Utilize a search bar and action buttons to find exactly what you're craving.
- **Seamless Cart Management**: Add, view, or modify your cart with a single click.
- **Effortless Sign In/Up**: Simple and secure account creation and login.
- **Enhanced Performance**: Utilizes caching techniques for a faster and smoother user experience.


### **Component Structure of InstaFood**

- **App**  
  - **Provider**  
    - **Header**  
      - `UserLocation`: Set your location for localized restaurant results  
      - `Login`: Access your account through Sign In/Up  
        - `UserForm`: Manage the Sign In/Up process  
    - **Outlet**  
      - **Body**  
        - `Filter`: Refine your search with filters  
        - `RestaurantCard`: View restaurant information  
        - `Shimmer`: Enjoy smooth loading transitions  
          - `ShimmerCard`: Placeholder UI during data fetch  
      - **About**: Learn more about each restaurant  
      - **RestaurantMenu**  
        - `MenuCategory`: View categorized menus  
          - `ItemCard`: Explore individual menu items  
        - `CartResetPopupCard`: Reset cart with ease  
      - **Cart**  
        - `AccountCard`: Manage your account details  
        - `AddressCard`: Set or update delivery addresses  
        - `PaymentCard`: Choose your payment method  


