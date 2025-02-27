export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  GenericScalar: { input: any; output: any; }
  ImageScalar: { input: any; output: any; }
  JSONString: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/** An enumeration. */
export enum AccountsUserGenderChoices {
  /** Female */
  F = 'F',
  /** Male */
  M = 'M',
  /** Other */
  O = 'O'
}

/** An enumeration. */
export enum AccountsUserRoleChoices {
  /** ACCOUNT_MANAGER */
  AccountManager = 'ACCOUNT_MANAGER',
  /** ADMIN */
  Admin = 'ADMIN',
  /** CONTENT_MANAGER */
  ContentManager = 'CONTENT_MANAGER',
  /** CUSTOMER */
  Customer = 'CUSTOMER',
  /** CUSTOMER_SERVICE */
  CustomerService = 'CUSTOMER_SERVICE',
  /** DEVELOPER */
  Developer = 'DEVELOPER',
  /** MARKETING */
  Marketing = 'MARKETING',
  /** SALES */
  Sales = 'SALES',
  /** SUPER_ADMIN */
  SuperAdmin = 'SUPER_ADMIN'
}

export type AddToCart = {
  __typename?: 'AddToCart';
  cartItem?: Maybe<CartItemType>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
  totalQuantity?: Maybe<Scalars['Int']['output']>;
};

export type AddToWishlist = {
  __typename?: 'AddToWishlist';
  wishlist?: Maybe<WishlistType>;
};

export type AddVendorBankInfo = {
  __typename?: 'AddVendorBankInfo';
  payload?: Maybe<VendorBankType>;
};

/** vendors gallery (multiple image for a vendor) */
export type AddVendorImage = {
  __typename?: 'AddVendorImage';
  payload?: Maybe<VendorGalleryType>;
};

export type AllBannersPaginatedType = {
  __typename?: 'AllBannersPaginatedType';
  banners?: Maybe<Array<Maybe<BannerType>>>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalCounts?: Maybe<Scalars['Int']['output']>;
};

export type AllInventoryDataType = {
  __typename?: 'AllInventoryDataType';
  result?: Maybe<Array<Maybe<SingleInventoryDataType>>>;
};

export type AllVendorsPaginatedType = {
  __typename?: 'AllVendorsPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalCounts?: Maybe<Scalars['Int']['output']>;
  vendors?: Maybe<Array<Maybe<VendorListType>>>;
};

export type AllVendorsubscriptionPlanType = {
  __typename?: 'AllVendorsubscriptionPlanType';
  basic?: Maybe<VendorsubscriptionPlanType>;
  gold?: Maybe<VendorsubscriptionPlanType>;
  platinum?: Maybe<VendorsubscriptionPlanType>;
  standard?: Maybe<VendorsubscriptionPlanType>;
};

export type ApplyCouponMutation = {
  __typename?: 'ApplyCouponMutation';
  discountedTotalAmount?: Maybe<Scalars['Decimal']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  order?: Maybe<OrderType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type BannerType = {
  __typename?: 'BannerType';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  link?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BlogType = {
  __typename?: 'BlogType';
  author: UserType;
  content: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  typeOfPost?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Scalars['String']['output']>;
};

export type BloggerMenuType = {
  __typename?: 'BloggerMenuType';
  blogger: UserType;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  title: Scalars['String']['output'];
};

export type CartItemType = {
  __typename?: 'CartItemType';
  cart: CartType;
  id: Scalars['ID']['output'];
  product?: Maybe<ProductsType>;
  quantity: Scalars['Int']['output'];
  variation?: Maybe<ProductVariantsType>;
};

export type CartType = {
  __typename?: 'CartType';
  cartItems?: Maybe<Array<Maybe<CartItemType>>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  sessionId?: Maybe<Scalars['String']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UserType>;
};

export type CategoryAttributeType = {
  __typename?: 'CategoryAttributeType';
  attributeType: ProductsCategoryAttributeAttributeTypeChoices;
  id: Scalars['ID']['output'];
  isRequired: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CategoryImageInput = {
  image: Scalars['Upload']['input'];
};

export type CategoryImageType = {
  __typename?: 'CategoryImageType';
  category: CategoryType;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
};

export type CategoryType = {
  __typename?: 'CategoryType';
  attributes: Array<CategoryAttributeType>;
  children?: Maybe<Array<Maybe<CategoryType>>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images: Array<CategoryImageType>;
  isFeatured: Scalars['Boolean']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<CategoryType>;
  products?: Maybe<Array<Maybe<ProductsType>>>;
  slug?: Maybe<Scalars['String']['output']>;
  status: ProductsCategoryStatusChoices;
  title: Scalars['String']['output'];
  topProducts?: Maybe<Array<Maybe<ProductsType>>>;
  viewCount: Scalars['Int']['output'];
};

export type ClearCart = {
  __typename?: 'ClearCart';
  cart?: Maybe<CartType>;
};

export type ColorsType = {
  __typename?: 'ColorsType';
  hexCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  rgbCode?: Maybe<Scalars['String']['output']>;
};

/** Register a new user and create a vendor profile */
export type CombinedSignupMutation = {
  __typename?: 'CombinedSignupMutation';
  payload?: Maybe<UserType>;
  token?: Maybe<Scalars['String']['output']>;
};

export type ContactDetailType = {
  __typename?: 'ContactDetailType';
  addressId: Scalars['ID']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  guestUser?: Maybe<GuestUserType>;
  isDefault: Scalars['Boolean']['output'];
  phone: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street1: Scalars['String']['output'];
  street2?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
  zipcode: Scalars['String']['output'];
};

export type CouponType = {
  __typename?: 'CouponType';
  applicableProducts: Array<ProductType>;
  code: Scalars['String']['output'];
  discountPercent: Scalars['Decimal']['output'];
  endDate: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  startDate: Scalars['Date']['output'];
};

export type CreateBanner = {
  __typename?: 'CreateBanner';
  banner?: Maybe<BannerType>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type CreateCategory = {
  __typename?: 'CreateCategory';
  categoryInput?: Maybe<CategoryType>;
};

export type CreateCategoryAttribute = {
  __typename?: 'CreateCategoryAttribute';
  attribute?: Maybe<CategoryAttributeType>;
};

export type CreateColor = {
  __typename?: 'CreateColor';
  color?: Maybe<ColorsType>;
  message?: Maybe<Scalars['String']['output']>;
};

export type CreateContactDetail = {
  __typename?: 'CreateContactDetail';
  contactDetail?: Maybe<ContactDetailType>;
};

export type CreateCouponMutation = {
  __typename?: 'CreateCouponMutation';
  coupon?: Maybe<CouponType>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CreateDeal = {
  __typename?: 'CreateDeal';
  deals?: Maybe<DealType>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type CreateGuestUserMutation = {
  __typename?: 'CreateGuestUserMutation';
  payload?: Maybe<GuestUserType>;
};

export type CreateOrderItemMutation = {
  __typename?: 'CreateOrderItemMutation';
  payload?: Maybe<OrderItemType>;
};

export type CreateOrderMutation = {
  __typename?: 'CreateOrderMutation';
  payload?: Maybe<OrderType>;
};

export type CreatePayment = {
  __typename?: 'CreatePayment';
  message?: Maybe<Scalars['String']['output']>;
  payments?: Maybe<PaymentType>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CreateProduct = {
  __typename?: 'CreateProduct';
  products?: Maybe<ProductsType>;
};

export type CreateReview = {
  __typename?: 'CreateReview';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  review?: Maybe<ReviewType>;
};

/** create a new vendor on specific tenant */
export type CreateVendorMutation = {
  __typename?: 'CreateVendorMutation';
  payload?: Maybe<VendorType>;
};

/** Represents The Vendor Admin Dashboard Overview */
export type DashboardSummeryType = {
  __typename?: 'DashboardSummeryType';
  canceledOrders?: Maybe<Scalars['Int']['output']>;
  categories?: Maybe<Scalars['Int']['output']>;
  deletedProducts?: Maybe<Scalars['Int']['output']>;
  deliveredOrders?: Maybe<Scalars['Int']['output']>;
  pendingOrders?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<Scalars['Int']['output']>;
  promotions?: Maybe<Scalars['Int']['output']>;
  returnedOrders?: Maybe<Scalars['Int']['output']>;
  shippedOrders?: Maybe<Scalars['Int']['output']>;
  soldOutProducts?: Maybe<Scalars['String']['output']>;
  top5Products?: Maybe<Array<Maybe<ProductsType>>>;
  totalMoney?: Maybe<Scalars['Float']['output']>;
};

export type DealType = {
  __typename?: 'DealType';
  createdAt: Scalars['DateTime']['output'];
  discountPercent: Scalars['Int']['output'];
  endDate: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  product: Array<ProductType>;
  startDate: Scalars['Date']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DeleteBanner = {
  __typename?: 'DeleteBanner';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type DeleteCategory = {
  __typename?: 'DeleteCategory';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteColor = {
  __typename?: 'DeleteColor';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type DeleteContactDetail = {
  __typename?: 'DeleteContactDetail';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteCouponMutation = {
  __typename?: 'DeleteCouponMutation';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteMyAccount = {
  __typename?: 'DeleteMyAccount';
  deleted?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type DeleteOrderItemMutation = {
  __typename?: 'DeleteOrderItemMutation';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteOrderMutation = {
  __typename?: 'DeleteOrderMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteProduct = {
  __typename?: 'DeleteProduct';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteUserByAdmin = {
  __typename?: 'DeleteUserByAdmin';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteVendorImage = {
  __typename?: 'DeleteVendorImage';
  deleted?: Maybe<Scalars['Boolean']['output']>;
};

export type FilterUserInput = {
  userId?: InputMaybe<Scalars['UUID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type FollowerType = {
  __typename?: 'FollowerType';
  id: Scalars['UUID']['output'];
  user: UserType;
};

export type FooterType = Node & {
  __typename?: 'FooterType';
  about: Scalars['JSONString']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserType>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  makeMoney: Scalars['JSONString']['output'];
  ourCourses: Scalars['JSONString']['output'];
  ourEcommerce: Scalars['JSONString']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserType>;
};

export type GetMyOrdersPaginatedType = {
  __typename?: 'GetMyOrdersPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrevious?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<Array<Maybe<OrderType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalCounts?: Maybe<Scalars['Int']['output']>;
};

export type GetMyProductsPaginatedType = {
  __typename?: 'GetMyProductsPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<Array<Maybe<ProductsType>>>;
  totalCounts?: Maybe<Scalars['Int']['output']>;
};

export type GuestUserType = {
  __typename?: 'GuestUserType';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type HashPasswordMutation = {
  __typename?: 'HashPasswordMutation';
  hash?: Maybe<Scalars['String']['output']>;
};

export type LoginWithPasswordMutation = {
  __typename?: 'LoginWithPasswordMutation';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  payload?: Maybe<UserType>;
  token?: Maybe<Scalars['String']['output']>;
};

export type LogoutMutation = {
  __typename?: 'LogoutMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutations = {
  __typename?: 'Mutations';
  addToCart?: Maybe<AddToCart>;
  addToWishlist?: Maybe<AddToWishlist>;
  addVendorBank?: Maybe<AddVendorBankInfo>;
  /** vendors gallery (multiple image for a vendor) */
  addVendorImage?: Maybe<AddVendorImage>;
  applyCoupon?: Maybe<ApplyCouponMutation>;
  clearCart?: Maybe<ClearCart>;
  /** Register a new user and create a vendor profile */
  combinedUser?: Maybe<CombinedSignupMutation>;
  createBanner?: Maybe<CreateBanner>;
  createCategory?: Maybe<CreateCategory>;
  createCategoryAttribute?: Maybe<CreateCategoryAttribute>;
  createColor?: Maybe<CreateColor>;
  createContactDetail?: Maybe<CreateContactDetail>;
  createCoupon?: Maybe<CreateCouponMutation>;
  createDeal?: Maybe<CreateDeal>;
  createGuestUser?: Maybe<CreateGuestUserMutation>;
  createOrder?: Maybe<CreateOrderMutation>;
  createOrderItem?: Maybe<CreateOrderItemMutation>;
  createPayment?: Maybe<CreatePayment>;
  createProduct?: Maybe<CreateProduct>;
  createProductAds?: Maybe<CreateProductAds>;
  createReview?: Maybe<CreateReview>;
  /** create a new vendor on specific tenant */
  createVendor?: Maybe<CreateVendorMutation>;
  deleteBanner?: Maybe<DeleteBanner>;
  deleteCategory?: Maybe<DeleteCategory>;
  deleteColor?: Maybe<DeleteColor>;
  deleteContactDetail?: Maybe<DeleteContactDetail>;
  deleteCoupon?: Maybe<DeleteCouponMutation>;
  deleteMyaccount?: Maybe<DeleteMyAccount>;
  deleteOrder?: Maybe<DeleteOrderMutation>;
  deleteOrderItem?: Maybe<DeleteOrderItemMutation>;
  deleteProduct?: Maybe<DeleteProduct>;
  deleteUserByadmin?: Maybe<DeleteUserByAdmin>;
  deleteVendorImage?: Maybe<DeleteVendorImage>;
  hashPassword?: Maybe<HashPasswordMutation>;
  loginWithPassword?: Maybe<LoginWithPasswordMutation>;
  loginWithToken?: Maybe<UserTokenAuthMutation>;
  refreshToken?: Maybe<Refresh>;
  registerAdmin?: Maybe<RegisterAdminMutation>;
  removeFromCart?: Maybe<RemoveFromCart>;
  removeFromWishlist?: Maybe<RemoveFromWishlist>;
  /**
   * get email verification code for initial user signup
   *
   * @permission: None
   */
  requestOtpCode?: Maybe<RequestVerificationCode>;
  requestPasswordReset?: Maybe<RequestPasswordResetMutation>;
  resetPassword?: Maybe<ResetPasswordMutation>;
  reverseOrder?: Maybe<ReverseOrderMutation>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateBanner?: Maybe<UpdateBanner>;
  updateCategory?: Maybe<UpdateCategory>;
  updateColor?: Maybe<UpdateColor>;
  updateContactDetail?: Maybe<UpdateContactDetail>;
  updateCoupon?: Maybe<UpdateCouponMutation>;
  updateMyCart?: Maybe<UpdateMyCartMutation>;
  updateOrder?: Maybe<UpdateOrderMutation>;
  updateOrderItem?: Maybe<UpdateOrderItemMutation>;
  updateProduct?: Maybe<UpdateProduct>;
  /**
   * Update Existing Authenticated User
   *
   * @permission: Authenticated
   */
  updateProfile?: Maybe<UpdateUserMutation>;
  updateReview?: Maybe<UpdateReview>;
  /**
   * update existing vendor data.
   *
   * @permission: VendorPermission.
   */
  updateVendor?: Maybe<UpdateVendorMutation>;
  userLogin?: Maybe<UserLoginMutation>;
  userLogout?: Maybe<LogoutMutation>;
  /**
   * create a new user (Signup)
   *
   * @permission: None
   */
  userSignup?: Maybe<UserSignupMutation>;
  vendorApprovalRequest?: Maybe<VendorBalancewithdarawalApprovalMutation>;
  vendorWithdrawalRequest?: Maybe<VendorBalanceWithdrawRequestMutation>;
  verifyProduct?: Maybe<VerifyProduct>;
  verifyToken?: Maybe<VerifyToken>;
  /** Verify User Phone */
  verifyUser?: Maybe<VerifyUserOtp>;
  verifyVendor?: Maybe<VerifyVendorMutation>;
};


export type MutationsAddToCartArgs = {
  productId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  variationId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsAddToWishlistArgs = {
  productId: Scalars['ID']['input'];
};


export type MutationsAddVendorBankArgs = {
  accountHolderName: Scalars['String']['input'];
  accountNumber: Scalars['String']['input'];
  accountType?: InputMaybe<Scalars['String']['input']>;
  bankBranch?: InputMaybe<Scalars['String']['input']>;
  bankName: Scalars['String']['input'];
  country: Scalars['String']['input'];
};


export type MutationsAddVendorImageArgs = {
  image: Scalars['ImageScalar']['input'];
  imgDesc?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsApplyCouponArgs = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};


export type MutationsClearCartArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationsCombinedUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  storeAddress: Scalars['String']['input'];
  storeCity: Scalars['String']['input'];
  storeCountry: Scalars['String']['input'];
  storeDescription: Scalars['String']['input'];
  storeName: Scalars['String']['input'];
  storeState: Scalars['String']['input'];
  storeZip?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationsCreateBannerArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsCreateCategoryArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  images: Array<InputMaybe<CategoryImageInput>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsCreateCategoryAttributeArgs = {
  attributeType: Scalars['String']['input'];
  categoryId: Scalars['ID']['input'];
  isRequired: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationsCreateColorArgs = {
  hexCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rgbCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsCreateContactDetailArgs = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  phone: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street1: Scalars['String']['input'];
  street2?: InputMaybe<Scalars['String']['input']>;
  zipcode: Scalars['String']['input'];
};


export type MutationsCreateCouponArgs = {
  applicableProducts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  applicableUserGroups?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code: Scalars['String']['input'];
  discountPercent: Scalars['Decimal']['input'];
  endDate: Scalars['Date']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  startDate: Scalars['Date']['input'];
};


export type MutationsCreateDealArgs = {
  discountPercent: Scalars['Int']['input'];
  endDate: Scalars['Date']['input'];
  productIds: Array<InputMaybe<Scalars['ID']['input']>>;
  startDate: Scalars['Date']['input'];
};


export type MutationsCreateGuestUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationsCreateOrderArgs = {
  address1: Scalars['String']['input'];
  address2?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  postCode?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  variantProductPairs?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>>>;
};


export type MutationsCreateOrderItemArgs = {
  orderId?: InputMaybe<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  variationId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationsCreatePaymentArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  paymentMethod: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  targetCurrency?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsCreateProductArgs = {
  attributes?: InputMaybe<Array<InputMaybe<ProductAttributeInput>>>;
  availableUnit?: InputMaybe<Scalars['Int']['input']>;
  categoryId: Scalars['ID']['input'];
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Scalars['Date']['input']>;
  dateUpdated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountPercent?: InputMaybe<Scalars['Int']['input']>;
  images: Array<InputMaybe<ProductsImageInput>>;
  price: Scalars['Float']['input'];
  productName: Scalars['String']['input'];
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  variations?: InputMaybe<Array<InputMaybe<ProductVariationInput>>>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsCreateProductAdsArgs = {
  adType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  productIds: Array<InputMaybe<Scalars['ID']['input']>>;
  title: Scalars['String']['input'];
};


export type MutationsCreateReviewArgs = {
  content: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationsCreateVendorArgs = {
  banner?: InputMaybe<Scalars['ImageScalar']['input']>;
  catagories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  kebele?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ImageScalar']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  referenceCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  sourceLink?: InputMaybe<Scalars['String']['input']>;
  storeCover?: InputMaybe<Scalars['ImageScalar']['input']>;
  storeLocations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storeName?: InputMaybe<Scalars['String']['input']>;
  subCity?: InputMaybe<Scalars['String']['input']>;
  supportEmail?: InputMaybe<Scalars['String']['input']>;
  supportPhone?: InputMaybe<Scalars['String']['input']>;
  templateType?: InputMaybe<Scalars['Int']['input']>;
  tinNumber?: InputMaybe<Scalars['String']['input']>;
  tradeLicence?: InputMaybe<Scalars['ImageScalar']['input']>;
  tradeName?: InputMaybe<Scalars['String']['input']>;
  user: Scalars['UUID']['input'];
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  woreda?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsDeleteBannerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeleteCategoryArgs = {
  categoryId: Scalars['ID']['input'];
};


export type MutationsDeleteColorArgs = {
  colorId: Scalars['Int']['input'];
};


export type MutationsDeleteContactDetailArgs = {
  addressId: Scalars['ID']['input'];
};


export type MutationsDeleteCouponArgs = {
  id: Scalars['ID']['input'];
};


export type MutationsDeleteMyaccountArgs = {
  password: Scalars['String']['input'];
};


export type MutationsDeleteOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationsDeleteOrderItemArgs = {
  itemId: Scalars['ID']['input'];
};


export type MutationsDeleteProductArgs = {
  productId: Scalars['ID']['input'];
};


export type MutationsDeleteUserByadminArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationsDeleteVendorImageArgs = {
  imageId: Scalars['ID']['input'];
};


export type MutationsHashPasswordArgs = {
  password: Scalars['String']['input'];
};


export type MutationsLoginWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationsLoginWithTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationsRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsRegisterAdminArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationsRemoveFromCartArgs = {
  productId: Scalars['Int']['input'];
  variationId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsRemoveFromWishlistArgs = {
  productId: Scalars['ID']['input'];
};


export type MutationsRequestOtpCodeArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  sms?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationsRequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationsResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationsReverseOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationsTokenAuthArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationsUpdateBannerArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateCategoryArgs = {
  categoryId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateColorArgs = {
  colorId: Scalars['Int']['input'];
  hexCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rgbCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateContactDetailArgs = {
  addressId: Scalars['ID']['input'];
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street1?: InputMaybe<Scalars['String']['input']>;
  street2?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateCouponArgs = {
  applicableProducts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  applicableUserGroups?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  discountPercent?: InputMaybe<Scalars['Decimal']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationsUpdateMyCartArgs = {
  cartId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationsUpdateOrderArgs = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postCode?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  status?: InputMaybe<OrderStatusEnum>;
  totalAmount: Scalars['Float']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationsUpdateOrderItemArgs = {
  itemId: Scalars['ID']['input'];
  productId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  variationId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationsUpdateProductArgs = {
  availableUnit?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateCreated?: InputMaybe<Scalars['Date']['input']>;
  dateUpdated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountPercent?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productId: Scalars['ID']['input'];
  productImg?: InputMaybe<Scalars['Upload']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  reviewCount?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationsUpdateProfileArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profilePic?: InputMaybe<Scalars['ImageScalar']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateReviewArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  rating?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUpdateVendorArgs = {
  banner?: InputMaybe<Scalars['ImageScalar']['input']>;
  catagories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  kebele?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ImageScalar']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  referenceCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  sourceLink?: InputMaybe<Scalars['String']['input']>;
  storeCover?: InputMaybe<Scalars['ImageScalar']['input']>;
  storeLocations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storeName?: InputMaybe<Scalars['String']['input']>;
  subCity?: InputMaybe<Scalars['String']['input']>;
  supportEmail?: InputMaybe<Scalars['String']['input']>;
  supportPhone?: InputMaybe<Scalars['String']['input']>;
  supportPhoneCall?: InputMaybe<Scalars['String']['input']>;
  templateType?: InputMaybe<Scalars['Int']['input']>;
  tinNumber?: InputMaybe<Scalars['String']['input']>;
  tradeLicence?: InputMaybe<Scalars['ImageScalar']['input']>;
  tradeName?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['UUID']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  woreda?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsUserLoginArgs = {
  token: Scalars['String']['input'];
};


export type MutationsUserLogoutArgs = {
  token: Scalars['String']['input'];
};


export type MutationsUserSignupArgs = {
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  profilePic?: InputMaybe<Scalars['ImageScalar']['input']>;
  username: Scalars['String']['input'];
};


export type MutationsVendorApprovalRequestArgs = {
  approved: Scalars['Boolean']['input'];
  withdrwalId: Scalars['String']['input'];
};


export type MutationsVendorWithdrawalRequestArgs = {
  balance: Scalars['Decimal']['input'];
};


export type MutationsVerifyProductArgs = {
  productId: Scalars['ID']['input'];
};


export type MutationsVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsVerifyUserArgs = {
  otp?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationsVerifyVendorArgs = {
  vendorId: Scalars['ID']['input'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

export type NotificationType = {
  __typename?: 'NotificationType';
  actionObjectObjectId?: Maybe<Scalars['String']['output']>;
  actorObjectId: Scalars['String']['output'];
  data?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  emailed: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  level: NotificationsNotificationLevelChoices;
  public: Scalars['Boolean']['output'];
  recipient: UserType;
  targetObjectId?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['DateTime']['output'];
  unread: Scalars['Boolean']['output'];
  verb: Scalars['String']['output'];
};

/** An enumeration. */
export enum NotificationsNotificationLevelChoices {
  /** error */
  Error = 'ERROR',
  /** info */
  Info = 'INFO',
  /** success */
  Success = 'SUCCESS',
  /** warning */
  Warning = 'WARNING'
}

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type OrderItemType = {
  __typename?: 'OrderItemType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  order: OrderType;
  price: Scalars['Decimal']['output'];
  product?: Maybe<ProductType>;
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variation?: Maybe<ProductVariantsType>;
};

export enum OrderStatusEnum {
  Canceled = 'CANCELED',
  Delivered = 'DELIVERED',
  Pending = 'PENDING',
  Returned = 'RETURNED',
  Shipped = 'SHIPPED'
}

export type OrderType = {
  __typename?: 'OrderType';
  address1: Scalars['String']['output'];
  address2?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  guestUser?: Maybe<GuestUserType>;
  id: Scalars['ID']['output'];
  items: Array<OrderItemType>;
  payments: Array<PaymentType>;
  phone: Scalars['Int']['output'];
  postCode?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrderStatusEnum>;
  totalAmount: Scalars['Decimal']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UserType>;
};

/** An enumeration. */
export enum OrdersPaymentsModelPaymentMethodChoices {
  /** Arifpay */
  Arifpay = 'ARIFPAY',
  /** Chapa */
  Chapa = 'CHAPA',
  /** Stripe */
  Stripe = 'STRIPE'
}

/** An enumeration. */
export enum OrdersPaymentsModelStatusChoices {
  /** Completed */
  Completed = 'COMPLETED',
  /** Failed */
  Failed = 'FAILED',
  /** Initialized */
  Initialized = 'INITIALIZED'
}

export type PaginatedCategoryType = {
  __typename?: 'PaginatedCategoryType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  objects?: Maybe<Array<Maybe<CategoryType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalObjects?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedDealType = {
  __typename?: 'PaginatedDealType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  objects?: Maybe<Array<Maybe<DealType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalObjects?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedOrderType = {
  __typename?: 'PaginatedOrderType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  objects?: Maybe<Array<Maybe<OrderType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalObjects?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedProductType = {
  __typename?: 'PaginatedProductType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  objects?: Maybe<Array<Maybe<ProductsType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalObjects?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedReviewsType = {
  __typename?: 'PaginatedReviewsType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  objects?: Maybe<Array<Maybe<ReviewType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalObjects?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedUserType = {
  __typename?: 'PaginatedUserType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  objects?: Maybe<Array<Maybe<UserType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalObjects?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedVendorBalanceWithdrawRequestType = {
  __typename?: 'PaginatedVendorBalanceWithdrawRequestType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  objects?: Maybe<Array<Maybe<VendorBalanceWithdrawRequestType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalObjects?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedVendorBlanceLogType = {
  __typename?: 'PaginatedVendorBlanceLogType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  objects?: Maybe<Array<Maybe<VendorBlanceLogType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalObjects?: Maybe<Scalars['Int']['output']>;
};

export type PaymentType = {
  __typename?: 'PaymentType';
  amount: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  order: OrderType;
  otToken: Scalars['String']['output'];
  paymentMethod: OrdersPaymentsModelPaymentMethodChoices;
  phone: Scalars['String']['output'];
  referenceId: Scalars['String']['output'];
  status: OrdersPaymentsModelStatusChoices;
};

export type ProductAdsPaginatedType = {
  __typename?: 'ProductAdsPaginatedType';
  message?: Maybe<Scalars['String']['output']>;
  totalCounts?: Maybe<Scalars['Int']['output']>;
};

export type ProductAdsType = {
  __typename?: 'ProductAdsType';
  adType: ProductsProductAdsModelAdTypeChoices;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  products: Array<ProductType>;
  status: Scalars['Boolean']['output'];
  title: ProductsProductAdsModelTitleChoices;
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
};

export type ProductAttributeInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ProductType = {
  __typename?: 'ProductType';
  ads: Array<ProductAdsType>;
  attributes?: Maybe<Scalars['JSONString']['output']>;
  availableUnit?: Maybe<Scalars['Int']['output']>;
  cartitemSet: Array<CartItemType>;
  category: CategoryType;
  color: Array<ColorsType>;
  coupons: Array<CouponType>;
  dateCreated: Scalars['Date']['output'];
  dateUpdated: Scalars['Date']['output'];
  deals: Array<DealType>;
  description: Scalars['String']['output'];
  discountPercent: Scalars['Int']['output'];
  images: Array<ProductsImageType>;
  isDeleted: Scalars['Boolean']['output'];
  orderProduct: Array<OrderItemType>;
  price: Scalars['Float']['output'];
  productId: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  publish: Scalars['Boolean']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviewCount: Scalars['Int']['output'];
  reviews: Array<ReviewType>;
  slug?: Maybe<Scalars['String']['output']>;
  soldOut: Scalars['Boolean']['output'];
  status: ProductsProductsModelStatusChoices;
  variations: Array<ProductVariantsType>;
  vendor: VendorType;
  viewCount: Scalars['Int']['output'];
  weight?: Maybe<Scalars['Int']['output']>;
  wishlistSet: Array<WishlistType>;
};

export type ProductVariantImageInput = {
  variantImages?: InputMaybe<Scalars['Upload']['input']>;
};

export type ProductVariantsType = {
  __typename?: 'ProductVariantsType';
  availableUnit: Scalars['Int']['output'];
  color?: Maybe<ColorsType>;
  id: Scalars['ID']['output'];
  material?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  variantPrice: Scalars['Decimal']['output'];
  weight?: Maybe<Scalars['Decimal']['output']>;
};

export type ProductVariationInput = {
  availableUnit?: InputMaybe<Scalars['Int']['input']>;
  colorId?: InputMaybe<Scalars['String']['input']>;
  images: Array<InputMaybe<ProductVariantImageInput>>;
  material?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantPrice?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

/** An enumeration. */
export enum ProductsCategoryAttributeAttributeTypeChoices {
  /** Number */
  Number = 'NUMBER',
  /** Select */
  Select = 'SELECT',
  /** Text */
  Text = 'TEXT'
}

/** An enumeration. */
export enum ProductsCategoryStatusChoices {
  /** False */
  False = 'FALSE',
  /** True */
  True = 'TRUE'
}

export type ProductsImageInput = {
  image: Scalars['Upload']['input'];
};

export type ProductsImageType = {
  __typename?: 'ProductsImageType';
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  product: ProductType;
  productVariation?: Maybe<ProductVariantsType>;
};

/** An enumeration. */
export enum ProductsProductAdsModelAdTypeChoices {
  /** Gold */
  Gold = 'GOLD',
  /** Premium */
  Premium = 'PREMIUM',
  /** Silver */
  Silver = 'SILVER'
}

/** An enumeration. */
export enum ProductsProductAdsModelTitleChoices {
  /** Banner */
  Banner = 'BANNER',
  /** Video */
  Video = 'VIDEO'
}

/** An enumeration. */
export enum ProductsProductsModelStatusChoices {
  /** APPROVED */
  Approved = 'APPROVED',
  /** DRAFT */
  Draft = 'DRAFT',
  /** PENDING */
  Pending = 'PENDING',
  /** REJECTED */
  Rejected = 'REJECTED'
}

export type ProductsType = {
  __typename?: 'ProductsType';
  attributes?: Maybe<Scalars['GenericScalar']['output']>;
  availableUnit?: Maybe<Scalars['Int']['output']>;
  category: CategoryType;
  color: Array<ColorsType>;
  dateCreated: Scalars['Date']['output'];
  dateUpdated: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  discountPercent: Scalars['Int']['output'];
  images: Array<ProductsImageType>;
  price: Scalars['Float']['output'];
  productId: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  publish: Scalars['Boolean']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviewCount: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  status: ProductsProductsModelStatusChoices;
  variants?: Maybe<Array<Maybe<ProductVariantsType>>>;
  vendor: VendorType;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  AllOrder?: Maybe<Array<Maybe<OrderType>>>;
  AllOrderItem?: Maybe<Array<Maybe<OrderItemType>>>;
  GetOrderById?: Maybe<Array<Maybe<OrderType>>>;
  GetOrderItemById?: Maybe<Array<Maybe<OrderItemType>>>;
  GetProduct?: Maybe<ProductsType>;
  activeUsers?: Maybe<PaginatedUserType>;
  allBanners?: Maybe<AllBannersPaginatedType>;
  allCartItems?: Maybe<Array<Maybe<CartItemType>>>;
  allCarts?: Maybe<Array<Maybe<CartType>>>;
  allCategory?: Maybe<PaginatedCategoryType>;
  allColors?: Maybe<Array<Maybe<ColorsType>>>;
  allCoupons?: Maybe<Array<Maybe<CouponType>>>;
  allDeals?: Maybe<PaginatedDealType>;
  allMainCategories?: Maybe<Array<Maybe<CategoryType>>>;
  allPendingProducts?: Maybe<PaginatedProductType>;
  allProducts?: Maybe<PaginatedProductType>;
  allSubCategories?: Maybe<Array<Maybe<CategoryType>>>;
  allSubscriptionPlan?: Maybe<AllVendorsubscriptionPlanType>;
  allSuppliers?: Maybe<Array<Maybe<VendorType>>>;
  allUsers?: Maybe<PaginatedUserType>;
  allVendorBalanceLog?: Maybe<PaginatedVendorBlanceLogType>;
  allVendorBalanceRequest?: Maybe<PaginatedVendorBalanceWithdrawRequestType>;
  allVendors?: Maybe<AllVendorsPaginatedType>;
  approvedProducts?: Maybe<Array<Maybe<ProductsType>>>;
  bloggerMenu?: Maybe<Array<Maybe<BloggerMenuType>>>;
  cart?: Maybe<CartType>;
  cartItem?: Maybe<CartItemType>;
  contactDetail?: Maybe<ContactDetailType>;
  contactDetails?: Maybe<Array<Maybe<ContactDetailType>>>;
  convertProductImageToWebp?: Maybe<Scalars['Boolean']['output']>;
  coupons?: Maybe<Array<Maybe<CouponType>>>;
  excitingDeals?: Maybe<PaginatedDealType>;
  featuredCategories?: Maybe<Array<Maybe<CategoryType>>>;
  getAdsById?: Maybe<Array<Maybe<ProductAdsType>>>;
  getAllRolePermissions?: Maybe<Array<Maybe<RolePermissionType>>>;
  getBannerById?: Maybe<Array<Maybe<BannerType>>>;
  getBannerByTitle?: Maybe<Array<Maybe<BannerType>>>;
  getBlogPost?: Maybe<Array<Maybe<BlogType>>>;
  getCategory?: Maybe<Array<Maybe<CategoryType>>>;
  getCategoryAttributes?: Maybe<Array<Maybe<CategoryAttributeType>>>;
  getCategoryByName?: Maybe<Array<Maybe<CategoryType>>>;
  getCategoryByParent?: Maybe<Array<Maybe<CategoryType>>>;
  getCategoryBySlug?: Maybe<Array<Maybe<CategoryType>>>;
  getColorsByHexcode?: Maybe<Array<Maybe<ColorsType>>>;
  getColorsById?: Maybe<Array<Maybe<ColorsType>>>;
  getDetailPost?: Maybe<BlogType>;
  getFooter?: Maybe<Array<Maybe<FooterType>>>;
  getLatestAds?: Maybe<ProductAdsPaginatedType>;
  getMe?: Maybe<UserType>;
  getMyAds?: Maybe<Array<Maybe<ProductAdsType>>>;
  getMyOrders?: Maybe<GetMyOrdersPaginatedType>;
  getMyProducts?: Maybe<GetMyProductsPaginatedType>;
  getProductAdByType?: Maybe<Array<Maybe<ProductAdsType>>>;
  getProductByAttributes?: Maybe<PaginatedProductType>;
  getProductByName?: Maybe<Array<Maybe<ProductsType>>>;
  getProductBySlug?: Maybe<Array<Maybe<ProductsType>>>;
  getProductByVendor?: Maybe<PaginatedProductType>;
  getRelatedProducts?: Maybe<Array<Maybe<ProductsType>>>;
  getUserById?: Maybe<UserType>;
  getUserContactDetail?: Maybe<Array<Maybe<ContactDetailType>>>;
  getUserOrders?: Maybe<PaginatedOrderType>;
  getVendorBankinfo?: Maybe<Array<Maybe<VendorBankType>>>;
  getVendorDocument?: Maybe<Array<Maybe<VendorDocumentType>>>;
  getVendorFollowers?: Maybe<Array<Maybe<FollowerType>>>;
  getVendorFooter?: Maybe<Array<Maybe<VendorFooterType>>>;
  getWishlist?: Maybe<Array<Maybe<WishlistType>>>;
  inventoryManagementSummary?: Maybe<AllInventoryDataType>;
  loggedInUsers?: Maybe<PaginatedUserType>;
  mostViewedCategories?: Maybe<Array<Maybe<CategoryType>>>;
  myCart?: Maybe<Array<Maybe<CartType>>>;
  notifications?: Maybe<Array<Maybe<NotificationType>>>;
  pendingProducts?: Maybe<Array<Maybe<ProductsType>>>;
  popularProducts?: Maybe<PaginatedProductType>;
  product?: Maybe<ProductsType>;
  productByMultipleAttributes?: Maybe<PaginatedProductType>;
  productReviews?: Maybe<PaginatedReviewsType>;
  retailer?: Maybe<VendorType>;
  retailers?: Maybe<Array<Maybe<VendorType>>>;
  review?: Maybe<ReviewType>;
  reviews?: Maybe<PaginatedReviewsType>;
  reviewsForVendor?: Maybe<PaginatedReviewsType>;
  rolePermissions?: Maybe<RolePermissionType>;
  searchProducts?: Maybe<PaginatedProductType>;
  searchUsers?: Maybe<PaginatedUserType>;
  searchVendors?: Maybe<Array<Maybe<VendorType>>>;
  staffUsers?: Maybe<PaginatedUserType>;
  subcategoriesByMainCategory?: Maybe<Array<Maybe<CategoryType>>>;
  supplier?: Maybe<VendorType>;
  supplierDashboardSummery?: Maybe<SuppliersDashboardSummeryType>;
  suppliers?: Maybe<Array<Maybe<VendorType>>>;
  userVerified?: Maybe<Scalars['Boolean']['output']>;
  vendorDashboardSummery?: Maybe<DashboardSummeryType>;
  vendorData?: Maybe<VendorType>;
  vendorExpirationStatus?: Maybe<VendorExpirationStatusType>;
  vendorGallery?: Maybe<Array<Maybe<VendorGalleryType>>>;
  vendorInfo?: Maybe<VendorType>;
  vendorInventoryManagement?: Maybe<VendorInventoryPaginatedType>;
  vendorPerformanceMetrics?: Maybe<Array<Maybe<VendorPerformanceType>>>;
  vendorSocialLink?: Maybe<SocialLinkType>;
  vendorsPromotion?: Maybe<VendorPromotionPaginatedType>;
};


export type QueryGetOrderByIdArgs = {
  orderId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetOrderItemByIdArgs = {
  orderItemId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetProductArgs = {
  productId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryActiveUsersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllBannersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllCategoryArgs = {
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryAllDealsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllPendingProductsArgs = {
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryAllProductsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllUsersArgs = {
  filters?: InputMaybe<FilterUserInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllVendorBalanceLogArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllVendorBalanceRequestArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllVendorsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBloggerMenuArgs = {
  bloggerId: Scalars['UUID']['input'];
};


export type QueryCartArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryCartItemArgs = {
  cartId: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
};


export type QueryContactDetailArgs = {
  addressId: Scalars['Int']['input'];
};


export type QueryConvertProductImageToWebpArgs = {
  deleteOldImage?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCouponsArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExcitingDealsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAdsByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetBannerByIdArgs = {
  bannerId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetBannerByTitleArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCategoryArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCategoryAttributesArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetCategoryByNameArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCategoryByParentArgs = {
  parentId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCategoryBySlugArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetColorsByHexcodeArgs = {
  hexCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetColorsByIdArgs = {
  colorId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDetailPostArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryGetLatestAdsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMyOrdersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMyProductsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetProductAdByTypeArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProductByAttributesArgs = {
  attributeKey?: InputMaybe<Scalars['String']['input']>;
  attributeValue?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetProductByNameArgs = {
  productName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProductBySlugArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProductByVendorArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRelatedProductsArgs = {
  productId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUserByIdArgs = {
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserOrdersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetVendorFollowersArgs = {
  vendorId: Scalars['UUID']['input'];
};


export type QueryLoggedInUsersArgs = {
  filter?: InputMaybe<FilterUserInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMostViewedCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPopularProductsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductByMultipleAttributesArgs = {
  attributes?: InputMaybe<Array<InputMaybe<ProductAttributeInput>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductReviewsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  productId: Scalars['Int']['input'];
};


export type QueryRetailerArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewsArgs = {
  filter?: InputMaybe<ReviewFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReviewsForVendorArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryRolePermissionsArgs = {
  role?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchProductsArgs = {
  category?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchUsersArgs = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchVendorsArgs = {
  searchTag?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStaffUsersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubcategoriesByMainCategoryArgs = {
  mainCategoryId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySupplierArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryUserVerifiedArgs = {
  email: Scalars['String']['input'];
};


export type QueryVendorGalleryArgs = {
  storeName: Scalars['String']['input'];
};


export type QueryVendorInfoArgs = {
  vendorId?: InputMaybe<Scalars['ID']['input']>;
  vendorName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVendorInventoryManagementArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVendorSocialLinkArgs = {
  vendorId: Scalars['UUID']['input'];
};


export type QueryVendorsPromotionArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type RegisterAdminMutation = {
  __typename?: 'RegisterAdminMutation';
  admin?: Maybe<UserType>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type RemoveFromCart = {
  __typename?: 'RemoveFromCart';
  cart?: Maybe<CartType>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RemoveFromWishlist = {
  __typename?: 'RemoveFromWishlist';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RequestPasswordResetMutation = {
  __typename?: 'RequestPasswordResetMutation';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * get email verification code for initial user signup
 *
 * @permission: None
 */
export type RequestVerificationCode = {
  __typename?: 'RequestVerificationCode';
  codeSent?: Maybe<Scalars['Boolean']['output']>;
};

export type ResetPasswordMutation = {
  __typename?: 'ResetPasswordMutation';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ReverseOrderMutation = {
  __typename?: 'ReverseOrderMutation';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type ReviewFilter = {
  dateRange?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type ReviewType = {
  __typename?: 'ReviewType';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  product: ProductType;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
};

export type RolePermissionType = {
  __typename?: 'RolePermissionType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  resources: Scalars['JSONString']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SingleInventoryDataType = {
  __typename?: 'SingleInventoryDataType';
  totalSold?: Maybe<Scalars['Int']['output']>;
  totalStock?: Maybe<Scalars['Int']['output']>;
};

export type SocialLinkType = {
  __typename?: 'SocialLinkType';
  facebook?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  telegram?: Maybe<Scalars['String']['output']>;
  tiktok?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type SuppliersDashboardSummeryType = {
  __typename?: 'SuppliersDashboardSummeryType';
  followers?: Maybe<Scalars['Int']['output']>;
  productProfit?: Maybe<Scalars['Int']['output']>;
  productsSold?: Maybe<Scalars['Int']['output']>;
  totalOrders?: Maybe<Scalars['Int']['output']>;
};

export type UpdateBanner = {
  __typename?: 'UpdateBanner';
  banner?: Maybe<BannerType>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type UpdateCategory = {
  __typename?: 'UpdateCategory';
  categoryInput?: Maybe<CategoryType>;
};

export type UpdateColor = {
  __typename?: 'UpdateColor';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<ColorsType>;
};

export type UpdateContactDetail = {
  __typename?: 'UpdateContactDetail';
  contactDetail?: Maybe<ContactDetailType>;
};

export type UpdateCouponMutation = {
  __typename?: 'UpdateCouponMutation';
  coupon?: Maybe<CouponType>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type UpdateMyCartMutation = {
  __typename?: 'UpdateMyCartMutation';
  cartItem?: Maybe<CartItemType>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type UpdateOrderItemMutation = {
  __typename?: 'UpdateOrderItemMutation';
  message?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<OrderItemType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateOrderMutation = {
  __typename?: 'UpdateOrderMutation';
  payload?: Maybe<OrderType>;
};

export type UpdateProduct = {
  __typename?: 'UpdateProduct';
  products?: Maybe<ProductsType>;
};

export type UpdateReview = {
  __typename?: 'UpdateReview';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  review?: Maybe<ReviewType>;
};

/**
 * Update Existing Authenticated User
 *
 * @permission: Authenticated
 */
export type UpdateUserMutation = {
  __typename?: 'UpdateUserMutation';
  payload?: Maybe<UserType>;
};

/**
 * update existing vendor data.
 *
 * @permission: VendorPermission.
 */
export type UpdateVendorMutation = {
  __typename?: 'UpdateVendorMutation';
  payload?: Maybe<VendorType>;
};

export type UserLoginMutation = {
  __typename?: 'UserLoginMutation';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  payload?: Maybe<UserType>;
};

/**
 * create a new user (Signup)
 *
 * @permission: None
 */
export type UserSignupMutation = {
  __typename?: 'UserSignupMutation';
  payload?: Maybe<UserType>;
  token?: Maybe<Scalars['String']['output']>;
};

export type UserTokenAuthMutation = {
  __typename?: 'UserTokenAuthMutation';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  payload?: Maybe<UserType>;
  token?: Maybe<Scalars['String']['output']>;
};

export type UserType = {
  __typename?: 'UserType';
  email?: Maybe<Scalars['String']['output']>;
  equivalentEtb?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<AccountsUserGenderChoices>;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  isSuperuser: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  language: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  phone?: Maybe<Scalars['String']['output']>;
  profilePic?: Maybe<Scalars['String']['output']>;
  role: AccountsUserRoleChoices;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type VendorAwardType = {
  __typename?: 'VendorAwardType';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserType>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  image: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserType>;
};

export type VendorBalanceLogType = {
  __typename?: 'VendorBalanceLogType';
  balance: Scalars['Decimal']['output'];
  balanceType: VendorsVendorBalanceLogBalanceTypeChoices;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserType>;
  vendor: VendorType;
};

export type VendorBalanceWithdrawRequestMutation = {
  __typename?: 'VendorBalanceWithdrawRequestMutation';
  withdrawRequest?: Maybe<VendorBalanceWithdrawRequestType>;
};

export type VendorBalanceWithdrawRequestType = {
  __typename?: 'VendorBalanceWithdrawRequestType';
  approvedBy?: Maybe<UserType>;
  approvedOn?: Maybe<Scalars['DateTime']['output']>;
  balance: Scalars['Decimal']['output'];
  cashedOutBy?: Maybe<UserType>;
  cashedOutOn?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  status: VendorsVendorBalanceWithdrawRequestStatusChoices;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendor: VendorType;
};

export type VendorBalancewithdarawalApprovalMutation = {
  __typename?: 'VendorBalancewithdarawalApprovalMutation';
  payload?: Maybe<VendorBalanceLogType>;
};

export type VendorBankType = {
  __typename?: 'VendorBankType';
  accountName: Scalars['String']['output'];
  accountNumber: Scalars['String']['output'];
  accountType?: Maybe<VendorsVendorBankAccountTypeChoices>;
  bankBranch?: Maybe<Scalars['String']['output']>;
  bankName: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserType>;
  id: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserType>;
};

export type VendorBlanceLogType = {
  __typename?: 'VendorBlanceLogType';
  balance: Scalars['Decimal']['output'];
  balanceType: VendorsVendorBalanceLogBalanceTypeChoices;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserType>;
  vendor: VendorType;
};

export type VendorDocumentType = {
  __typename?: 'VendorDocumentType';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<UserType>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  image: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserType>;
};

export type VendorExpirationStatusType = {
  __typename?: 'VendorExpirationStatusType';
  daysLeft?: Maybe<Scalars['Int']['output']>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  expiresOn?: Maybe<Scalars['DateTime']['output']>;
  registeredOn?: Maybe<Scalars['DateTime']['output']>;
};

export type VendorFooterType = Node & {
  __typename?: 'VendorFooterType';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  ourProducts: Scalars['JSONString']['output'];
  ourService: Scalars['JSONString']['output'];
  tradeService: Scalars['JSONString']['output'];
  whoWeAre: Scalars['JSONString']['output'];
};

export type VendorGalleryType = {
  __typename?: 'VendorGalleryType';
  id: Scalars['UUID']['output'];
  image: Scalars['String']['output'];
  imgDesc?: Maybe<Scalars['String']['output']>;
};

export type VendorInventoryPaginatedType = {
  __typename?: 'VendorInventoryPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  objects?: Maybe<Array<Maybe<VendorInventoryType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalCounts?: Maybe<Scalars['Int']['output']>;
};

export type VendorInventoryType = {
  __typename?: 'VendorInventoryType';
  availableUnit?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalMoneyEarned?: Maybe<Scalars['Float']['output']>;
  totalQuantityOrdered?: Maybe<Scalars['Int']['output']>;
};

export type VendorListType = {
  __typename?: 'VendorListType';
  banner?: Maybe<Scalars['String']['output']>;
  catagories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  followerSet: Array<FollowerType>;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  isSupplier: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  kebele?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  orders: Scalars['Int']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  referenceCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  socialLinks?: Maybe<SocialLinkType>;
  sourceLink?: Maybe<Scalars['String']['output']>;
  storeCover?: Maybe<Scalars['String']['output']>;
  storeLocations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  storeName: Scalars['String']['output'];
  subCity?: Maybe<Scalars['String']['output']>;
  supportEmail?: Maybe<Scalars['String']['output']>;
  supportPhone?: Maybe<Scalars['String']['output']>;
  supportPhoneCall?: Maybe<Scalars['String']['output']>;
  tags: Array<VendorTagsType>;
  templateType: Scalars['Int']['output'];
  tinNumber?: Maybe<Scalars['String']['output']>;
  tradeLicence?: Maybe<Scalars['String']['output']>;
  tradeName?: Maybe<Scalars['String']['output']>;
  user: UserType;
  vendorfooter?: Maybe<VendorFooterType>;
  vendorgallerySet: Array<VendorGalleryType>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  woreda?: Maybe<Scalars['String']['output']>;
};

export type VendorPerformanceType = {
  __typename?: 'VendorPerformanceType';
  averageCustomerRating?: Maybe<Scalars['Float']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  numberOfOrders?: Maybe<Scalars['Int']['output']>;
  storeName?: Maybe<Scalars['String']['output']>;
  totalNumberOfFeedbacks?: Maybe<Scalars['Int']['output']>;
  totalSalesAmount?: Maybe<Scalars['Int']['output']>;
  vendorId?: Maybe<Scalars['UUID']['output']>;
  vendorUsername?: Maybe<Scalars['String']['output']>;
};

export type VendorPromotionPaginatedType = {
  __typename?: 'VendorPromotionPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  objects?: Maybe<Array<Maybe<VendorPromotionType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  totalObjects?: Maybe<Scalars['Int']['output']>;
};

export type VendorPromotionType = {
  __typename?: 'VendorPromotionType';
  activeUntil?: Maybe<Scalars['Int']['output']>;
  approvedBy?: Maybe<UserType>;
  approvedOn?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  phoneNumber: Scalars['String']['output'];
  status: VendorsVendorPromotionSubscriptionStatusChoices;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendor: VendorType;
};

export type VendorTagsType = {
  __typename?: 'VendorTagsType';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['Boolean']['output'];
  tags: VendorsVendorTagsModelTagsChoices;
  updatedAt: Scalars['Date']['output'];
  vendor: VendorType;
};

export type VendorType = {
  __typename?: 'VendorType';
  allProductsCount?: Maybe<Scalars['Int']['output']>;
  awards?: Maybe<Array<Maybe<VendorAwardType>>>;
  bankInfo?: Maybe<VendorBankType>;
  banner?: Maybe<Scalars['String']['output']>;
  callAction?: Maybe<Scalars['String']['output']>;
  catagories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerRating?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  followerSet: Array<FollowerType>;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  isSupplier: Scalars['Boolean']['output'];
  isVendorActive?: Maybe<Scalars['Boolean']['output']>;
  isVerified: Scalars['Boolean']['output'];
  kebele?: Maybe<Scalars['String']['output']>;
  legalDocuments?: Maybe<Array<Maybe<VendorDocumentType>>>;
  location?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  myBalance?: Maybe<Scalars['Float']['output']>;
  myTotalBalance?: Maybe<Scalars['Float']['output']>;
  myWithdrawRequests?: Maybe<Array<Maybe<VendorBalanceWithdrawRequestType>>>;
  orderFulfillmentRate?: Maybe<Scalars['String']['output']>;
  orderQualityScore?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  productCont?: Maybe<Scalars['Int']['output']>;
  referenceCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  socialLinks?: Maybe<SocialLinkType>;
  sourceLink?: Maybe<Scalars['String']['output']>;
  storeCover?: Maybe<Scalars['String']['output']>;
  storeLocations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  storeName: Scalars['String']['output'];
  subCity?: Maybe<Scalars['String']['output']>;
  supportEmail?: Maybe<Scalars['String']['output']>;
  supportPhone?: Maybe<Scalars['String']['output']>;
  supportPhoneCall?: Maybe<Scalars['String']['output']>;
  templateType: Scalars['Int']['output'];
  tinNumber?: Maybe<Scalars['String']['output']>;
  tradeLicence?: Maybe<Scalars['String']['output']>;
  tradeName?: Maybe<Scalars['String']['output']>;
  user: UserType;
  vendorfooter?: Maybe<VendorFooterType>;
  vendorgallerySet: Array<VendorGalleryType>;
  videoUrl?: Maybe<Scalars['String']['output']>;
  visitedTimes?: Maybe<Scalars['Int']['output']>;
  woreda?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum VendorsVendorBalanceLogBalanceTypeChoices {
  /** DEPOSIT */
  Deposit = 'DEPOSIT',
  /** FREE_DELIVERY */
  FreeDelivery = 'FREE_DELIVERY',
  /** WITHDRAW */
  Withdraw = 'WITHDRAW'
}

/** An enumeration. */
export enum VendorsVendorBalanceWithdrawRequestStatusChoices {
  /** APPROVED */
  Approved = 'APPROVED',
  /** CANCELED */
  Canceled = 'CANCELED',
  /** CASHED_OUT */
  CashedOut = 'CASHED_OUT',
  /** PENDING */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum VendorsVendorBankAccountTypeChoices {
  /** Certificate of Deposit (CD) */
  CertificateOfDeposit = 'CERTIFICATE_OF_DEPOSIT',
  /** Checking Account */
  Checking = 'CHECKING',
  /** Deposit Account */
  Deposit = 'DEPOSIT',
  /** Money Market Account */
  MoneyMarket = 'MONEY_MARKET',
  /** Savings Account */
  Savings = 'SAVINGS'
}

/** An enumeration. */
export enum VendorsVendorPromotionSubscriptionStatusChoices {
  /** APPROVED */
  Approved = 'APPROVED',
  /** CANCELED */
  Canceled = 'CANCELED'
}

/** An enumeration. */
export enum VendorsVendorTagsModelTagsChoices {
  /** Best Seller */
  BestSeller = 'BEST_SELLER',
  /** Customer Favorite */
  CustomersFavorite = 'CUSTOMERS_FAVORITE',
  /** Recommended */
  Recommended = 'RECOMMENDED',
  /** Top Rated */
  TopRated = 'TOP_RATED',
  /** Trending */
  Trending = 'TRENDING'
}

export type VendorsubscriptionPlanType = {
  __typename?: 'VendorsubscriptionPlanType';
  plan?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type VerifyProduct = {
  __typename?: 'VerifyProduct';
  product?: Maybe<ProductsType>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type VerifyToken = {
  __typename?: 'VerifyToken';
  payload?: Maybe<VerifyTokenType>;
};

export type VerifyTokenType = {
  __typename?: 'VerifyTokenType';
  extra?: Maybe<Scalars['GenericScalar']['output']>;
  user?: Maybe<UserType>;
};

/** Verify User Phone */
export type VerifyUserOtp = {
  __typename?: 'VerifyUserOTP';
  payload?: Maybe<UserType>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerifyVendorMutation = {
  __typename?: 'VerifyVendorMutation';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  vendor?: Maybe<VendorType>;
};

export type WishlistType = {
  __typename?: 'WishlistType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  product: ProductType;
  productImages?: Maybe<Array<Maybe<ProductsImageType>>>;
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
};

export type CreateProductAds = {
  __typename?: 'createProductAds';
  ads?: Maybe<ProductAdsType>;
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};
