//---------------------------------------------------------
// declaring the (3) Packs
// items inside are declared at the end of the file

pack = [];
pack[0] = [];
pack[1] = [];
pack[2] = [];

//---------------------------------------------------------

const outfitsDiv = document.getElementById( "outfits" );

outfitsDiv.addEventListener( "click", e => {
    if(  e.target
                .parentElement
                .parentElement
                .classList.contains( "outfit-card" ) ) {
                    
        let elm = e.target.parentElement.parentElement;
        let id = Number( elm.id );
        let gallery = elm.parentElement;
        let galleryID = Number( gallery.id );

        localStorage.setItem( "look", JSON.stringify( pack[ galleryID ][ id ] ) );
        location.href="lookbuilder.html";
    }
});

// pack[0][0] => 1st Clemens Outfit
pack[0][0] = [{ id: 14,
                name: "White Dinner Jacket Tuxedo",
                price: 575,
                image: "https://static.theblacktux.com/products/tuxedos/white-jacket-tuxedo/1_20160811_HolidayEcom_WhiteJacketTuxedo_0127_R1812x1875_new.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Fwhite-tuxedo-jacket%2FWhite-Dinner-Tuxedo-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Fblack-pants%2FBlack-Tuxedo-Pants.png?width=426",
                type: 0 
            },
            {   id: 22,
                name: "Cotton Dress Shirt",
                price: 80,
                image: "https://static.theblacktux.com/products/shirts/white-dress-shirt/1_325_REVISED_1_1812x1875.jpg?width=845&height=875",
                type: 1 
            },
            {   id: 58,
                name: "Black Butterfly Bow Tie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/black-bow-tie/1_TE_016_black_0699_1812x1875.jpg?width=845&height=875",
                type: 5
            },
            {   id: 81,
                name: "Black Patent Leather Shoes",
                price: 95,
                image: "https://static.theblacktux.com/products/shoes/black-patent-leather-shoes/1_009-8_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 77,
                name: "Suspenders",
                price: 40,
                image: "https://static.theblacktux.com/products/accessory/suspenders-slim/1_suspenders_0001_1812x1875.jpg?width=845&height=875", 
                type: 12
            },
            {   id: 97,
                name: "White Linen Pocket Square",
                price: 20,
                image: "https://static.theblacktux.com/products/accessory/13-white-linen-pocket-square/MS-PS01-WT001_Large_1_w1_NO%20LOGO_1812x1875.jpg?width=845&height=875",
                type: 10
            },
            {   id: 44,
                name: "Silver Onyx Button Studs",
                price: 15,
                image: "https://static.theblacktux.com/products/cufflinks-studs/black-button-studs/JY_002_silver_onyx_0174_1812x1875.jpg?width=845&height=875",
                type:  4
            }];

// pack[0][1] => 2nd Wallace Outfit
pack[0][1] = [{ id: 3,
                name: "Shawl Collar Tuxedo",
                price: 500,
                image: "https://static.theblacktux.com/products/tuxedos/shawl-collar-tuxedo/1_11_SCT_4417_Ext_F_1812x1875_new.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Fshawl-collar-jacket%2FShawl-Collar-Tuxedo-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Fblack-pants%2FBlack-Tuxedo-Pants.png?width=426",
                type: 0
            },
            {   id: 24,
                name: "Cotton Wing Tip Shirt",
                price: 90,
                image: "https://static.theblacktux.com/products/shirts/classic-tuxedo-shirt/1_316_REVISED_1_1812x1875.jpg?width=845&height=875",
                type: 1
            },
            {   id: 58,
                name: "Black Butterfly Bow Tie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/black-bow-tie/1_TE_016_black_0699_1812x1875.jpg?width=845&height=875",
                type: 5
            },
            {   id: 81,
                name: "Black Patent Leather Shoes",
                price: 95,
                image: "https://static.theblacktux.com/products/shoes/black-patent-leather-shoes/1_009-8_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 77,
                name: "Suspenders",
                price: 40,
                image: "https://static.theblacktux.com/products/accessory/suspenders-slim/1_suspenders_0001_1812x1875.jpg?width=845&height=875",
                type: 12
            },
            {   id: 97,
                name: "White Linen Pocket Square",
                price: 20,
                image: "https://static.theblacktux.com/products/accessory/13-white-linen-pocket-square/MS-PS01-WT001_Large_1_w1_NO%20LOGO_1812x1875.jpg?width=845&height=875",
                type: 10
            },
            {   id: 70,
                name: "Cummerbund",
                price: 30,
                image: "https://static.theblacktux.com/products/accessory/cummerbund/1_VT016_camouflage_cummerbund_0346_1812x1875.jpg?width=845&height=875",
                type: 11
            },
            {   id: 47,
                name: "Silver Pearl Cufflinks",
                price: 15,
                image: "https://static.theblacktux.com/products/cufflinks-studs/silver-oval-pearl-cufflinks/JY_003_silver_pearl_0035_1812x1875.jpg?width=845&height=875",
                type: 3
            },
            {   id: 48,
                name: "Silver Pearl Button Studs",
                price: 15,
                image: "https://static.theblacktux.com/products/cufflinks-studs/silver-oval-pearl-button-studs/JY_004_silver_pearl_0153_1812x1875.jpg?width=845&height=875",
                type: 4
            }];
       
// pack[0][2] => 3rd Baltic Outfit
pack[0][2] = [{ id: 40,
                name: "Midnight Blue Tuxedo",
                price: 600,
                image: "https://static.theblacktux.com/products/tuxedos/midnight-blue-tuxedo/1_2018_0326_TBT_Spring-Ecomm_Shot01_-2_w1_1812x1875.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Fmidnight-blue-tuxedo-jacket%2FMidnight-Blue-Tuxedo-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Fmidnight-blue-pants%2FMidnight-Blue-Pants.png?width=426",
                type: 0
            },
            {   id: 24,
                name: "Cotton Wing Tip Shirt",
                price: 90,
                image: "https://static.theblacktux.com/products/shirts/classic-tuxedo-shirt/1_316_REVISED_1_1812x1875.jpg?width=845&height=875",
                type: 1
            },
            {   id: 59,
                name: "Black Satin Diamond Bow Tie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/self-tie-bow-tie-diamond/1_20161028_StillLife_BlackSatinDiamondSelfTie_0304_w1_1812x1875.jpg?width=845&height=875",
                type: 5
            },
            {   id: 85,
                name: "Patent Leather Wood Sole",
                price: 110,
                image: "https://static.theblacktux.com/products/shoes/patent-leather-brown-sole/1_008-10_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 77,
                name: "Suspenders",
                price: 40,
                image: "https://static.theblacktux.com/products/accessory/suspenders-slim/1_suspenders_0001_1812x1875.jpg?width=845&height=875",
                type: 12
            },
            {   id: 97,
                name: "White Linen Pocket Square",
                price: 20,
                image: "https://static.theblacktux.com/products/accessory/13-white-linen-pocket-square/MS-PS01-WT001_Large_1_w1_NO%20LOGO_1812x1875.jpg?width=845&height=875",
                type: 10
            },
            {   id: 47,
                name: "Silver Pearl Cufflinks",
                price: 15,
                image: "https://static.theblacktux.com/products/cufflinks-studs/silver-oval-pearl-cufflinks/JY_003_silver_pearl_0035_1812x1875.jpg?width=845&height=875",
                type: 3
            },
            {   id: 48,
                name: "Silver Pearl Button Studs",
                price: 15,
                image: "https://static.theblacktux.com/products/cufflinks-studs/silver-oval-pearl-button-studs/JY_004_silver_pearl_0153_1812x1875.jpg?width=845&height=875",
                type: 4
            }];

// pack[0][3] => 4th - Newman
pack[0][3] = [{ id: 1,
                name: "Peak Lapel Tuxedo",
                price: 450,
                image: "https://static.theblacktux.com/products/tuxedos/peaked-lapel/1_20160811_HolidayEcom_BlackTuxedoAndWhiteJacket_0207_w1_1812x1875.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Fpeaked-tuxedo-jacket%2FPeak-Lapel-Tuxedo-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Fblack-pants%2FBlack-Tuxedo-Pants.png?width=426",
                type: 0
            },
            {   id: 24,
                name: "Cotton Wing Tip Shirt",
                price: 90,
                image: "https://static.theblacktux.com/products/shirts/classic-tuxedo-shirt/1_316_REVISED_1_1812x1875.jpg?width=845&height=875",
                type: 1
            },
            {   id: 58,
                name: "Black Butterfly Bow Tie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/black-bow-tie/1_TE_016_black_0699_1812x1875.jpg?width=845&height=875",
                type: 5
            },
            {   id: 81,
                name: "Black Patent Leather Shoes",
                price: 95,
                image: "https://static.theblacktux.com/products/shoes/black-patent-leather-shoes/1_009-8_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 77,
                name: "Suspenders",
                price: 40,
                image: "https://static.theblacktux.com/products/accessory/suspenders-slim/1_suspenders_0001_1812x1875.jpg?width=845&height=875",
                type: 12
            },
            {   id: 97,
                name: "White Linen Pocket Square",
                price: 20,
                image: "https://static.theblacktux.com/products/accessory/13-white-linen-pocket-square/MS-PS01-WT001_Large_1_w1_NO%20LOGO_1812x1875.jpg?width=845&height=875",
                type: 10
            },
            {   id: 37,
                name: "Black Low Cut Tuxedo Vest",
                price: 120,
                image: "https://static.theblacktux.com/products/vests/black-low-cut-vest/3_2018_0326_TBT_Spring-Ecomm_Shot10_-349_w1_1812x1875.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fvests%2Fblack-low-cut-vest%2FBlack-Low-Cut-Tuxedo-Vest.png?width=282",
                type: 2
            },
            {   id: 43,
                name: "Silver Onyx Cufflinks",
                price: 15,
                image: "https://static.theblacktux.com/products/cufflinks-studs/silver-tone-oval-onyx-cufflinks/JY_001_silver_onyx_0032rt5_1812x1875.jpg?width=845&height=875",
                type: 3
            },
            {   id: 44,
                name: "Silver Onyx Button Studs",
                price: 15,
                image: "https://static.theblacktux.com/products/cufflinks-studs/black-button-studs/JY_002_silver_onyx_0174_1812x1875.jpg?width=845&height=875",
                type: 4
            }];

// pack[1][0] => 5th - Bowie
pack[1][0] = [{ id: 9,
                name: "Light Blue Shawl Tuxedo",
                price: 575,
                image: "https://static.theblacktux.com/products/tuxedos/Light%20Blue%20Shawl%20Tuxedo/01_2019_0924_TBT_HC19_eComm_01_LightBlueShawl_044.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Flight-blue-shawl-tuxedo-jacket%2FLight-Blue-Shawl-Tuxedo-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Flight-blue-pant%2FLight-Blue-Pant.png?width=426",
                type: 0
            },
            {   id: 22,
                name: "Cotton Dress Shirt",
                price: 80,
                image: "https://static.theblacktux.com/products/shirts/white-dress-shirt/1_325_REVISED_1_1812x1875.jpg?width=845&height=875",
                type: 1
            },
            {   id: 58,
                name: "Black Butterfly Bow Tie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/black-bow-tie/1_TE_016_black_0699_1812x1875.jpg?width=845&height=875",
                type: 5
            },
            {   id: 88,
                name: "Black Grosgrain Loafers",
                price: 125,
                image: "https://static.theblacktux.com/products/shoes/black-grosgrain-loafers/1_20161028_StillLife_BlackLoaferShoe_0255_w1_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 77,
                name: "Suspenders",
                price: 40,
                image: "https://static.theblacktux.com/products/accessory/suspenders-slim/1_suspenders_0001_1812x1875.jpg?width=845&height=875",
                type: 12
            },
            {   id: 98,
                name: "Leopard Print Pocket Square",
                price: 20,
                image: "https://static.theblacktux.com/products/accessory/leopard-print-pocket-square/01_20180918_leopard_pocket_square_0321_w1_1812x1875.JPG?width=845&height=875",
                type: 10
            },
            {   id: 43,
                name: "Silver Onyx Cufflinks",
                price: 15,
                image: "https://static.theblacktux.com/products/cufflinks-studs/silver-tone-oval-onyx-cufflinks/JY_001_silver_onyx_0032rt5_1812x1875.jpg?width=845&height=875",
                type: 3
            }];

// pack[1][1] => 6th - Belmont
pack[1][1] = [{ id: 4,
                name: "Midnight Pin Dot Tuxedo",
                price: 375,
                image: "https://static.theblacktux.com/products/tuxedos/midnight-pin-dot-tuxedo/1_20160811_HolidayEcom_BlackAndPinDotJacket_2238_w1_1812x1875.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Fmidnight-pin-dot-tuxedo-jacket%2FMidnight-Pin-Dot-Tuxedo-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Fblack-pants%2FBlack-Tuxedo-Pants.png?width=426",
                type: 0
            },
            {   id: 22,
                name: "Cotton Dress Shirt",
                price: 80,
                image: "https://static.theblacktux.com/products/shirts/white-dress-shirt/1_325_REVISED_1_1812x1875.jpg?width=845&height=875",
                type: 1
            },
            {   id: 67,
                name: "Black Stripe Silk Necktie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/black-stripe-silk-necktie/1_Necktie_Black_White_Striped_1_1812x1875.jpg?width=845&height=875",
                type: 6
            },
            {   id: 87,
                name: "Brown Suede Shoes",
                price: 95,
                image: "https://static.theblacktux.com/products/shoes/brown-suede-shoes/1_20161028_StillLife_BrownSuedeShoes_0271_w1_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 92,
                name: "Brown Suede Belt",
                price: 40,
                image: "https://static.theblacktux.com/products/belts/brown-suede-belt/20170317_suede_belt_1812x1875.jpg?width=845&height=875",
                type: 8
            },
            {   id: 97,
                name: "White Linen Pocket Square",
                price: 20,
                image: "https://static.theblacktux.com/products/accessory/13-white-linen-pocket-square/MS-PS01-WT001_Large_1_w1_NO%20LOGO_1812x1875.jpg?width=845&height=875",
                type: 10
            },
            {   id: 38,
                name: "Navy Suit Vest",
                price: 120,
                image: "https://static.theblacktux.com/products/vests/navy-vest/1_08_CLBNS_3552_Ext_F_1812x1875.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products/vests/navy-vest/Navy-Suit-Vest.png?width=282",
                type: 2
            }];

// pack[1][2] => 7th - Eliot
pack[1][2] = [{ id: 19,
                name: "Chambray Tuxedo",
                price: 600,
                image: "https://static.theblacktux.com/products/tuxedos/chambray-tuxedo/5_20160811_HolidayEcom_ChambrayTuxedo_1793_w1_new.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Fchambray-tuxedo-jacket%2FChambray-Tuxedo-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Fchambray-pants%2FChambray-Pants.png?width=426",
                type: 0
            },
            {   id: 22,
                name: "Cotton Dress Shirt",
                price: 80,
                image: "https://static.theblacktux.com/products/shirts/white-dress-shirt/1_325_REVISED_1_1812x1875.jpg?width=845&height=875",
                type: 1
            },
            {   id: 72,
                name: "Navy Wool/Silk Necktie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/navy-grain-slim-neck-tie/1_TIE_FLAT_BLUE_MATTE_1812x1875.jpg?width=845&height=875",
                type: 6
            },
            {   id: 83,
                name: "Black Leather Wood Sole",
                price: 95,
                image: "https://static.theblacktux.com/products/shoes/leather-brown-sole/1_006-6_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 97,
                name: "White Linen Pocket Square",
                price: 20,
                image: "https://static.theblacktux.com/products/accessory/13-white-linen-pocket-square/MS-PS01-WT001_Large_1_w1_NO%20LOGO_1812x1875.jpg?width=845&height=875",
                type: 10
            }];

// pack[1][3] => 8th - Holden
pack[1][3] = [{ id: 40,
                name: "Midnight Blue Tuxedo",
                price: 600,
                image: "https://static.theblacktux.com/products/tuxedos/midnight-blue-tuxedo/1_2018_0326_TBT_Spring-Ecomm_Shot01_-2_w1_1812x1875.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Fmidnight-blue-tuxedo-jacket%2FMidnight-Blue-Tuxedo-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Fmidnight-blue-pants%2FMidnight-Blue-Pants.png?width=426",
                type: 0
            },
            {   id: 22,
                name: "Cotton Dress Shirt",
                price: 80,
                image: "https://static.theblacktux.com/products/shirts/white-dress-shirt/1_325_REVISED_1_1812x1875.jpg?width=845&height=875",
                type: 1
            },
            {   id: 58,
                name: "Black Butterfly Bow Tie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/black-bow-tie/1_TE_016_black_0699_1812x1875.jpg?width=845&height=875",
                type: 5
            },
            {   id: 81,
                name: "Black Patent Leather Shoes",
                price: 95,
                image: "https://static.theblacktux.com/products/shoes/black-patent-leather-shoes/1_009-8_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 77,
                name: "Suspenders",
                price: 40,
                image: "https://static.theblacktux.com/products/accessory/suspenders-slim/1_suspenders_0001_1812x1875.jpg?width=845&height=875",
                type: 12
            },
            {   id: 43,
                name: "Silver Onyx Cufflinks",
                price: 15,
                image: "https://static.theblacktux.com/products/cufflinks-studs/silver-tone-oval-onyx-cufflinks/JY_001_silver_onyx_0032rt5_1812x1875.jpg?width=845&height=875",
                type: 3
            }];

// pack[2][0] => 9th - Groom
pack[2][0] = [{ id: 17,
                name: "Emerald Shawl Tuxedo",
                price: 575,
                image: "https://static.theblacktux.com/products/tuxedos/emerald-shawl-tuxedo/01_2017_0901_TBT_EmeraldTux_188_w1_1812x1875.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Femerald-shawl-tuxedo-jacket%2FEmerald-Shawl-Tuxedo-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Femerald-tuxedo-pants%2FEmerald-Tuxedo-Pants.png?width=426",
                type: 0
            },
            {   id: 23,
                name: "Cotton Fly-Front Dress Shirt",
                price: 80,
                image: "https://static.theblacktux.com/products/shirts/cotton-fly-front-dress-shirt/1_151104_BLKTUX_Ecomm_Product_Look2_WhiteShirt_040_1812x1875_2.jpg?width=845&height=875",
                type: 1
            },
            {   id: 74,
                name: "Navy Pindot Silk Bow Tie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/navy-pin-dot-silk-bow-tie/1_TE_BT01_BL031_Navy_pindot_tied_final_0187_w1_1812x1875.jpg?width=845&height=875",
                type: 5
            },
            {   id: 88,
                name: "Black Grosgrain Loafers",
                price: 125,
                image: "https://static.theblacktux.com/products/shoes/black-grosgrain-loafers/1_20161028_StillLife_BlackLoaferShoe_0255_w1_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 77,
                name: "Suspenders",
                price: 40,
                image: "https://static.theblacktux.com/products/accessory/suspenders-slim/1_suspenders_0001_1812x1875.jpg?width=845&height=875",
                type: 12
            },
            {   id: 93,
                name: "Black Linen Pocket Square",
                price: 20,
                image: "https://static.theblacktux.com/products/accessory/black-linen-pocket-square/MS-PS01-BK001_Large_1_1812x1875.jpg?width=845&height=875",
                type: 10
            }];

// pack[2][1] => 10th - Groomsmen
pack[2][1] = [{ id: 6,
                name: "Light Grey Suit",
                price: 375,
                image: "https://static.theblacktux.com/products/suits/light-grey-suit/1_161129_TBT_Ecom_Light_Gray_Suit_2_1262_w1_1812x1875.jpg?width=845&height=875",
                image2: "https://static.theblacktux.com/products%2Fjackets%2Flight-grey-suit-jacket%2FLight-Grey-Suit-Jacket.png?width=426",
                image3: "https://static.theblacktux.com/products%2Fpants%2Flight-grey-pants%2FLight-Grey-Pant.png?width=426",
                type: 0
            },
            {   id: 22,
                name: "Cotton Dress Shirt",
                price: 80,
                image: "https://static.theblacktux.com/products/shirts/white-dress-shirt/1_325_REVISED_1_1812x1875.jpg?width=845&height=875",
                type: 1
            },
            {   id: 65,
                name: "Olive Silk Necktie",
                price: 25,
                image: "https://static.theblacktux.com/products/neckwear/olive-silk-necktie/1_TE_NT01_GN006_OLIVE_SOLID_REPP_0215_w1_1812x1875.jpg?width=845&height=875",
                type: 6
            },
            {   id: 82,
                name: "Brown Leather Shoes",
                price: 100,
                image: "https://static.theblacktux.com/products/shoes/brown-leather-shoes/BrownLeatherShoes_1_1812x1875.jpg?width=845&height=875",
                type: 7
            },
            {   id: 91,
                name: "Brown Belt",
                price: 40,
                image: "https://static.theblacktux.com/products/belts/brown-belt/1_329_1812x1875.jpg?width=845&height=875",
                type: 8
            },
            {   id: 97,
                name: "White Linen Pocket Square",
                price: 20,
                image: "https://static.theblacktux.com/products/accessory/13-white-linen-pocket-square/MS-PS01-WT001_Large_1_w1_NO%20LOGO_1812x1875.jpg?width=845&height=875",
                type: 10
            }];
