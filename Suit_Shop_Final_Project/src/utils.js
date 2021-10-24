//---------------------------------------
// PROUCTS' TYPES CONSTANTS

const TYPE_SUIT = 0;
const TYPE_SHIRT = 1;
const TYPE_VEST = 2;
const TYPE_CUFFLINKS = 3;
const TYPE_STUDS = 4;
const TYPE_BOWTIE = 5;
const TYPE_NECKTIE = 6;
const TYPE_SHOES = 7;
const TYPE_BELT = 8;
const TYPE_TIECLIP = 9;
const TYPE_POCKETSQUARE = 10;
const TYPE_CUMMERBUND = 11;
const TYPE_SUSPENDERS = 12;

const TOTAL_TYPES = 13;

function getTypeName( type ) {
    switch( type ) {
        case TYPE_SUIT: { return "Suit"; } break;
        case TYPE_SHIRT: { return "Shirt"; } break;
        case TYPE_VEST: { return "Vest"; } break;
        case TYPE_CUFFLINKS: { return "Cufflinks"; } break;
        case TYPE_STUDS: { return "Button Studs"; } break;
        case TYPE_BOWTIE: { return "Bow Tie"; } break;
        case TYPE_NECKTIE: { return "Necktie"; } break;
        case TYPE_SHOES: { return "Shoes"; } break;
        case TYPE_BELT: { return "Belt"; } break;
        case TYPE_TIECLIP: { return "Tieclip"; } break;
        case TYPE_POCKETSQUARE: { return "Pocket Square"; } break;
        case TYPE_CUMMERBUND: { return "Cummerbund"; } break;
        case TYPE_SUSPENDERS: { return "Suspenders"; } break;
        default: { return "unknown"; } break;
    }
}

const CATEG_SUITS = 0;
const CATEG_SHIRTS = 1;
const CATEG_VESTS = 2;
const CATEG_CUFFLINKS_STUDS = 3;
const CATEG_NECKWEAR = 4;
const CATEG_SHOES = 5;
const CATEG_ACCESSORIES = 6;

const TOTAL_CATEGORIES = 7;

function getCategoryName( category ) {
    switch( category ) {
        case CATEG_SUITS: { return "Suits"; } break;
        case CATEG_SHIRTS: { return "Shirts"; } break;
        case CATEG_VESTS: { return "Vests"; } break;
        case CATEG_CUFFLINKS_STUDS: { return "Cufflinks & Studs"; } break;
        case CATEG_NECKWEAR: { return "Neckwear"; } break;
        case CATEG_SHOES: { return "Shoes"; } break;
        case CATEG_ACCESSORIES: { return "Accessories"; } break;
        default: { return "unknown"; } break;
    }
}

function getCategoryIdByType( type ) {
    switch( type ) {
        case TYPE_SUIT: { return CATEG_SUITS; } break;
        case TYPE_SHIRT: { return CATEG_SHIRTS; } break;
        case TYPE_VEST: { return CATEG_VESTS; } break;
        case TYPE_CUFFLINKS:
        case TYPE_STUDS: { return CATEG_CUFFLINKS_STUDS; } break;
        case TYPE_BOWTIE:
        case TYPE_NECKTIE: { return CATEG_NECKWEAR; } break;
        case TYPE_SHOES: { return CATEG_SHOES; } break;
        default: { return CATEG_ACCESSORIES; } break;
    }
}

const LOOKTYPE_SUIT = 0;
const LOOKTYPE_SHIRT = 1;
const LOOKTYPE_NECKWEAR = 2;
const LOOKTYPE_SHOES = 3;
const LOOKTYPE_BELT_SUSPENDERS = 4;
const LOOKTYPE_POCKETSQUARE = 5;
const LOOKTYPE_VEST_CUMMERBUND = 6;
const LOOKTYPE_CUFFLINKS = 7;
const LOOKTYPE_STUDS = 8;
const LOOKTYPE_TIECLIP = 9;

const TOTAL_LOOKTYPES = 10;

function getLookType( type ) {
    switch( type ) {
        case TYPE_SUIT: { return LOOKTYPE_SUIT; } break;
        case TYPE_SHIRT: { return LOOKTYPE_SHIRT; } break;
        case TYPE_BOWTIE:
        case TYPE_NECKTIE: { return LOOKTYPE_NECKWEAR; } break;
        case TYPE_SHOES: { return LOOKTYPE_SHOES; } break;
        case TYPE_BELT:
        case TYPE_SUSPENDERS: { return LOOKTYPE_BELT_SUSPENDERS; } break;
        case TYPE_POCKETSQUARE: { return LOOKTYPE_POCKETSQUARE; } break;
        case TYPE_VEST:
        case TYPE_CUMMERBUND: { return LOOKTYPE_VEST_CUMMERBUND; } break;
        case TYPE_CUFFLINKS: { return LOOKTYPE_CUFFLINKS; } break;
        case TYPE_STUDS: { return LOOKTYPE_STUDS; } break;
        case TYPE_TIECLIP: { return LOOKTYPE_TIECLIP; } break;
        default: { return "unknown"; } break;
    }
}

function getLookName( type ) {
    switch( type ) {
        case LOOKTYPE_SUIT: { return "Suit or Tuxedo"; } break;
        case LOOKTYPE_SHIRT: { return "Shirt"; } break;
        case LOOKTYPE_NECKWEAR: { return "Neckwear"; } break;
        case LOOKTYPE_SHOES: { return "Shoes"; } break;
        case LOOKTYPE_BELT_SUSPENDERS: { return "Belt or Suspenders"; } break;
        case LOOKTYPE_POCKETSQUARE: { return "Pocket Square"; } break;
        case LOOKTYPE_VEST_CUMMERBUND: { return "Vest or Cummerbund"; } break;
        case LOOKTYPE_CUFFLINKS: { return "Cufflinks"; } break;
        case LOOKTYPE_STUDS: { return "Studs"; } break;
        case LOOKTYPE_TIECLIP: { return "Tie Clip"; } break;
    }
}

function getMixForLookType( type ) {
    // products' types that fits to a look type
    switch( type ) {
        case LOOKTYPE_SUIT: { return TYPE_SUIT; } break;
        case LOOKTYPE_SHIRT: { return TYPE_SHIRT; } break;
        case LOOKTYPE_NECKWEAR: { return TYPE_BOWTIE + "+" + TYPE_NECKTIE; } break;
        case LOOKTYPE_SHOES: { return TYPE_SHOES; } break;
        case LOOKTYPE_BELT_SUSPENDERS: { return TYPE_BELT + "+" + TYPE_SUSPENDERS; } break;
        case LOOKTYPE_POCKETSQUARE: { return TYPE_POCKETSQUARE; } break;
        case LOOKTYPE_VEST_CUMMERBUND: { return TYPE_VEST + "+" + TYPE_CUMMERBUND; } break;
        case LOOKTYPE_CUFFLINKS: { return TYPE_CUFFLINKS; } break;
        case LOOKTYPE_STUDS: { return TYPE_STUDS; } break;
        case LOOKTYPE_TIECLIP: { return TYPE_TIECLIP; } break;
    }
}

//---------------------------------------
// HIGHLIGHTS' CONSTANTS

// id 0 is for "nothing" (empty text) for when reading the Name

const HL_MERINO_WOOL = 1; // 100% super-fine Italian merino wool
const HL_ONE_BUTTON = 2; // One-button closure
const HL_PEAK_LAPELS = 3; // 100% silk satin peak lapels
const HL_SIDE_VENTS = 4; // Side vents
const HL_CANVASSED = 5; // Fully canvassed
const HL_TWO_BUTTON = 6; // Two-button closure
const HL_NOTCH_LAPELS = 7; // 100% silk satin notch lapels
const HL_SHAWL_COLLAR = 8; // 100% silk satin shawl collar
const HL_NOTCH_LAPELS2 = 9; // Notch lapels

const HL_SHIRT_COTTON = 10; // 100% fine cotton
const HL_SHIRT_CONV_BARREL_CUFFS = 11; // Convertible barrel cuffs (accepts cufflinks)
const HL_SHIRT_CONV_FRONT_PLACKET = 12; // Convertible front placket (accepts button studs)
const HL_SHIRT_FRENCH_CUFFS = 13; // French cuffs
const HL_SHIRT_CONCEALED_PLACKET = 14; // Concealed placket
const HL_SHIRT_SILK_KNOT_CUFFLINKS = 15; // Includes silk knot cufflinks
const HL_SHIRT_FOLD_COLLAR = 16; // Fold-down collar
const HL_SHIRT_NARROW_BIB = 17; // Narrow pleated bib
const HL_SHIRT_NO_BUTTON = 18; // Does not accept button studs

// this one was moved from 0 to 19, so we can let 0 be "nothing" when
// triggering that HL ID name.
const HL_97_MERINO_3_ELASTANE = 19; // 97% Merino Wool, 3% Elastane

const HL_VEST_FIVE_BUTTON = 20; // Five-button closure
const HL_VEST_FULL_BACKING = 21; // Full backing
const HL_VEST_IVORY_SATIN = 22; // Ivory satin accents
const HL_VEST_BLACK_SATIN = 23; // Black satin accents
const HL_VEST_THREE_BUTTON = 24; // Three-button closure
const HL_VEST_FULL_SILK_BACKING = 25; // Full silk backing
const HL_VEST_SIX_BUTTON = 26; // Six-button closure

const HL_STUD_POLISHED_BRASS = 30; // Polished brass
const HL_STUD_ONYX_CENTER = 31; // Onyx center
const HL_STUD_FIVE = 32; // Set of five
const HL_STUD_MOTHER_PEARL_CENTER = 33; // Mother of pearl center
const HL_STUD_ENAMELED_BRASS = 34; // Enameled solid brass
const HL_STUD_LASER_ENGRAVED = 35; // Laser engraved
const HL_STUD_REVERSIBLE = 36; // Reversible
const HL_STUD_BULLET_CLOSURE = 37; // Bullet back closure
const HL_STUD_POLISHED_PLATED_BRASS = 38; // Polished plated brass
const HL_STUD_FIXED_BACKING = 39; // Fixed backing

const HL_NECKWEAR_SILK = 40; // 100% silk
const HL_NECKWEAR_ADJ_STRAP = 41; // Pre-tied with adjustable strap
const HL_NECKWEAR_SILK_SATIN = 42; // 100% silk satin
const HL_NECKWEAR_275_WIDE = 43; // 2.75" wide
const HL_NECKWEAR_70_WOOL_30_SILK = 44; // 70% wool, 30% silk
const HL_NECKWEAR_COTTON = 45; // 100% cotton
const HL_NECKWEAR_LINEN = 46; // 100% linen
const HL_NECKWEAR_2_WIDE = 44; // 2 inches wide
const HL_NECKWEAR_3_WIDE = 45; // 3 inches wide
const HL_NECKWEAR_WOOL = 46; // 100% wool

const HL_SHOES_PATENT_LEATHER_UPPER = 50; // Patent leather upper
const HL_SHOES_RUBBER_SOLE = 51; // Rubber sole
const HL_SHOES_MAINTAINED = 52; // Lovingly maintained by our in-house cobblers
const HL_SHOES_WOOD_SOLE = 53; // Wood sole
const HL_SHOES_LEATHER_UPPER = 54; // Leather upper
const HL_SHOES_VELVET_UPPER = 55; // Velvet upper
const HL_SHOES_SUEDE_UPPER = 56; // Suede upper
const HL_SHOES_LEATHER_GROSGRAIN = 57; // Leather upper with grosgrain vamp

const HL_ACC_BLACK_LEATHER = 60; // Black leather
const HL_ACC_SILVER_FRAME = 61; // Silver tone frame-style buckle
const HL_ACC_GOLD_PLATED = 62; // Gold Plated
const HL_ACC_175_LONG = 63; // 1.75 Long
const HL_ACC_BROWN_LEATHER = 64; // Brown leather
const HL_ACC_COTTON_LINEN = 65; // 100% cotton linen
const HL_ACC_13x13 = 66; // 13 x 13
const HL_ACC_SILK_LINEN = 67; // Silk Linen Blend
const HL_ACC_145x145 = 68; // 14.5 x 14.5
const HL_ACC_SILK_ELASTIC = 69; // Silk and elastic
const HL_ACC_ADJ_BACKING = 70; // Adjustable backing
const HL_ACC_LEATHER_ELASTIC = 71; // Leather and Elastic
const HL_ACC_1_WIDE = 72; // 1 inch wide

function productHighlights( highlights ) {
    let output = "";
    let hls = highlights.split( "," );
    hls.forEach( hl => {
        if( hl == 0 ) output += "";
        else output += "<li>" + highlightName( Number(hl) ) + "</li>"
    });
    return output;
}

function highlightName( hl ) {
	switch( hl ) {
        case 0: {
            return "";
        } break;
        case HL_97_MERINO_3_ELASTANE: {
            return "97% Merino Wool, 3% Elastane";
        } break;
        case HL_MERINO_WOOL: {
            return "100% super-fine Italian merino wool";
        } break;
        case HL_ONE_BUTTON: {
            return "One-button closure";
        } break;
        case HL_PEAK_LAPELS: {
            return "100% silk satin peak lapels";
        } break;
        case HL_SIDE_VENTS: {
            return "Side vents";
        } break;
        case HL_CANVASSED: {
            return "Fully canvassed";
        } break;
        case HL_TWO_BUTTON: {
            return "Two-button closure";
        } break;
        case HL_NOTCH_LAPELS: {
            return "100% silk satin notch lapels";
        } break;
        case HL_SHAWL_COLLAR: {
            return "100% silk satin shawl collar";
        } break;
        case HL_NOTCH_LAPELS2: {
            return "Notch lapels";
        } break;
        case HL_SHIRT_COTTON: {
            return "100% fine cotton";
        } break;
        case HL_SHIRT_CONV_BARREL_CUFFS: {
            return "Convertible barrel cuffs (accepts cufflinks)";
        } break;
        case HL_SHIRT_CONV_FRONT_PLACKET: {
            return "Convertible front placket (accepts button studs)";
        } break;
        case HL_SHIRT_FRENCH_CUFFS: {
            return "French cuffs";
        } break;
        case HL_SHIRT_CONCEALED_PLACKET: {
            return "Concealed placket";
        } break;
        case HL_SHIRT_SILK_KNOT_CUFFLINKS: {
            return "Includes silk knot cufflinks";
        } break;
        case HL_SHIRT_FOLD_COLLAR: {
            return "Fold-down collar";
        } break;
        case HL_SHIRT_NARROW_BIB: {
            return "Narrow pleated bib";
        } break;
        case HL_SHIRT_NO_BUTTON: {
            return "Does not accept button studs";
        } break;
        case HL_VEST_FIVE_BUTTON: {
            return "Five-button closure";
        } break;
        case HL_VEST_FULL_BACKING: {
            return "Full backing";
        } break;
        case HL_VEST_IVORY_SATIN: {
            return "Ivory satin accents";
        } break;
        case HL_VEST_BLACK_SATIN: {
            return "Black satin accents";
        } break;
        case HL_VEST_THREE_BUTTON: {
            return "Three-button closure";
        } break;
        case HL_VEST_FULL_SILK_BACKING: {
            return "Full silk backing";
        } break;
        case HL_VEST_SIX_BUTTON: {
            return "Six-button closure";
        } break;
        case HL_STUD_POLISHED_BRASS: {
            return "Polished brass";
        } break;
        case HL_STUD_ONYX_CENTER: {
            return "Onyx center";
        } break;
        case HL_STUD_FIVE: {
            return "Set of five";
        } break;
        case HL_STUD_MOTHER_PEARL_CENTER: {
            return "Mother of pearl center";
        } break;
        case HL_STUD_ENAMELED_BRASS: {
            return "Enameled solid brass";
        } break;
        case HL_STUD_LASER_ENGRAVED: {
            return "Laser engraved";
        } break;
        case HL_STUD_REVERSIBLE: {
            return "Reversible";
        } break;
        case HL_STUD_BULLET_CLOSURE: {
            return "Bullet back closure";
        } break;
        case HL_STUD_POLISHED_PLATED_BRASS: {
            return "Polished plated brass";
        } break;
        case HL_STUD_FIXED_BACKING: {
            return "Fixed backing";
        } break;
        case HL_NECKWEAR_SILK: {
            return "100% silk";
        } break;
        case HL_NECKWEAR_ADJ_STRAP: {
            return "Pre-tied with adjustable strap";
        } break;
        case HL_NECKWEAR_SILK_SATIN: {
            return "100% silk satin";
        } break;
        case HL_NECKWEAR_275_WIDE: {
            return '2.75" wide';
        } break;
        case HL_NECKWEAR_70_WOOL_30_SILK: {
            return "70% wool, 30% silk";
        } break;
        case HL_NECKWEAR_COTTON: {
            return "100% cotton";
        } break;
        case HL_NECKWEAR_LINEN: {
            return "100% linen";
        } break;
        case HL_NECKWEAR_2_WIDE: {
            return "2 inches wide";
        } break;
        case HL_NECKWEAR_3_WIDE: {
            return "3 inches wide";
        } break;
        case HL_NECKWEAR_WOOL: {
            return "100% wool";
        } break;
        case HL_SHOES_PATENT_LEATHER_UPPER: {
            return "Patent leather upper";
        } break;
        case HL_SHOES_RUBBER_SOLE: {
            return "Rubber sole";
        } break;
        case HL_SHOES_MAINTAINED: {
            return "Lovingly maintained by our in-house cobblers";
        } break;
        case HL_SHOES_WOOD_SOLE: {
            return "Wood sole";
        } break;
        case HL_SHOES_LEATHER_UPPER: {
            return "Leather upper";
        } break;
        case HL_SHOES_VELVET_UPPER: {
            return "Velvet upper";
        } break;
        case HL_SHOES_SUEDE_UPPER: {
            return "Suede upper";
        } break;
        case HL_SHOES_LEATHER_GROSGRAIN: {
            return "Leather upper with grosgrain vamp";
        } break;
        case HL_ACC_BLACK_LEATHER: {
            return "Black leather";
        } break;
        case HL_ACC_SILVER_FRAME: {
            return "Silver tone frame-style buckle";
        } break;
        case HL_ACC_GOLD_PLATED: {
            return "Gold Plated";
        } break;
        case HL_ACC_175_LONG: {
            return "1.75 Long";
        } break;
        case HL_ACC_BROWN_LEATHER: {
            return "Brown leather";
        } break;
        case HL_ACC_COTTON_LINEN: {
            return "100% cotton linen";
        } break;
        case HL_ACC_13x13: {
            return "13 x 13";
        } break;
        case HL_ACC_SILK_LINEN: {
            return "Silk Linen Blend";
        } break;
        case HL_ACC_145x145: {
            return "14.5 x 14.5";
        } break;
        case HL_ACC_SILK_ELASTIC: {
            return "Silk and elastic";
        } break;
        case HL_ACC_ADJ_BACKING: {
            return "Adjustable backing";
        } break;
        case HL_ACC_LEATHER_ELASTIC: {
            return "Leather and Elastic";
        } break;
        case HL_ACC_1_WIDE: {
            return "1 inch wide";
        } break;

		default: {
			return "unknown";
		} break;
	}
}

function highlightID( name ) {
	switch( name ) {
        case HL_97_MERINO_3_ELASTANE: {
            return "97% Merino Wool, 3% Elastane";
        } break;
        case HL_MERINO_WOOL: {
            return "100% super-fine Italian merino wool";
        } break;
        case HL_ONE_BUTTON: {
            return "One-button closure";
        } break;
        case HL_PEAK_LAPELS: {
            return "100% silk satin peak lapels";
        } break;
        case HL_SIDE_VENTS: {
            return "Side vents";
        } break;
        case HL_CANVASSED: {
            return "Fully canvassed";
        } break;
        case HL_TWO_BUTTON: {
            return "Two-button closure";
        } break;
        case HL_NOTCH_LAPELS: {
            return "100% silk satin notch lapels";
        } break;
        case HL_SHAWL_COLLAR: {
            return "100% silk satin shawl collar";
        } break;
        case HL_NOTCH_LAPELS2: {
            return "Notch lapels";
        } break;
        case HL_SHIRT_COTTON: {
            return "100% fine cotton";
        } break;
        case HL_SHIRT_CONV_BARREL_CUFFS: {
            return "Convertible barrel cuffs (accepts cufflinks)";
        } break;
        case HL_SHIRT_CONV_FRONT_PLACKET: {
            return "Convertible front placket (accepts button studs)";
        } break;
        case HL_SHIRT_FRENCH_CUFFS: {
            return "French cuffs";
        } break;
        case HL_SHIRT_CONCEALED_PLACKET: {
            return "Concealed placket";
        } break;
        case HL_SHIRT_SILK_KNOT_CUFFLINKS: {
            return "Includes silk knot cufflinks";
        } break;
        case HL_SHIRT_FOLD_COLLAR: {
            return "Fold-down collar";
        } break;
        case HL_SHIRT_NARROW_BIB: {
            return "Narrow pleated bib";
        } break;
        case HL_SHIRT_NO_BUTTON: {
            return "Does not accept button studs";
        } break;
        case HL_VEST_FIVE_BUTTON: {
            return "Five-button closure";
        } break;
        case HL_VEST_FULL_BACKING: {
            return "Full backing";
        } break;
        case HL_VEST_IVORY_SATIN: {
            return "Ivory satin accents";
        } break;
        case HL_VEST_BLACK_SATIN: {
            return "Black satin accents";
        } break;
        case HL_VEST_THREE_BUTTON: {
            return "Three-button closure";
        } break;
        case HL_VEST_FULL_SILK_BACKING: {
            return "Full silk backing";
        } break;
        case HL_VEST_SIX_BUTTON: {
            return "Six-button closure";
        } break;
        case HL_STUD_POLISHED_BRASS: {
            return "Polished brass";
        } break;
        case HL_STUD_ONYX_CENTER: {
            return "Onyx center";
        } break;
        case HL_STUD_FIVE: {
            return "Set of five";
        } break;
        case HL_STUD_MOTHER_PEARL_CENTER: {
            return "Mother of pearl center";
        } break;
        case HL_STUD_ENAMELED_BRASS: {
            return "Enameled solid brass";
        } break;
        case HL_STUD_LASER_ENGRAVED: {
            return "Laser engraved";
        } break;
        case HL_STUD_REVERSIBLE: {
            return "Reversible";
        } break;
        case HL_STUD_BULLET_CLOSURE: {
            return "Bullet back closure";
        } break;
        case HL_STUD_POLISHED_PLATED_BRASS: {
            return "Polished plated brass";
        } break;
        case HL_STUD_FIXED_BACKING: {
            return "Fixed backing";
        } break;
        case HL_NECKWEAR_SILK: {
            return "100% silk";
        } break;
        case HL_NECKWEAR_ADJ_STRAP: {
            return "Pre-tied with adjustable strap";
        } break;
        case HL_NECKWEAR_SILK_SATIN: {
            return "100% silk satin";
        } break;
        case HL_NECKWEAR_275_WIDE: {
            return '2.75" wide';
        } break;
        case HL_NECKWEAR_70_WOOL_30_SILK: {
            return "70% wool, 30% silk";
        } break;
        case HL_NECKWEAR_COTTON: {
            return "100% cotton";
        } break;
        case HL_NECKWEAR_LINEN: {
            return "100% linen";
        } break;
        case HL_NECKWEAR_2_WIDE: {
            return "2 inches wide";
        } break;
        case HL_NECKWEAR_3_WIDE: {
            return "3 inches wide";
        } break;
        case HL_NECKWEAR_WOOL: {
            return "100% wool";
        } break;
        case HL_SHOES_PATENT_LEATHER_UPPER: {
            return "Patent leather upper";
        } break;
        case HL_SHOES_RUBBER_SOLE: {
            return "Rubber sole";
        } break;
        case HL_SHOES_MAINTAINED: {
            return "Lovingly maintained by our in-house cobblers";
        } break;
        case HL_SHOES_WOOD_SOLE: {
            return "Wood sole";
        } break;
        case HL_SHOES_LEATHER_UPPER: {
            return "Leather upper";
        } break;
        case HL_SHOES_VELVET_UPPER: {
            return "Velvet upper";
        } break;
        case HL_SHOES_SUEDE_UPPER: {
            return "Suede upper";
        } break;
        case HL_SHOES_LEATHER_GROSGRAIN: {
            return "Leather upper with grosgrain vamp";
        } break;
        case HL_ACC_BLACK_LEATHER: {
            return "Black leather";
        } break;
        case HL_ACC_SILVER_FRAME: {
            return "Silver tone frame-style buckle";
        } break;
        case HL_ACC_GOLD_PLATED: {
            return "Gold Plated";
        } break;
        case HL_ACC_175_LONG: {
            return "1.75 Long";
        } break;
        case HL_ACC_BROWN_LEATHER: {
            return "Brown leather";
        } break;
        case HL_ACC_COTTON_LINEN: {
            return "100% cotton linen";
        } break;
        case HL_ACC_13x13: {
            return "13 x 13";
        } break;
        case HL_ACC_SILK_LINEN: {
            return "Silk Linen Blend";
        } break;
        case HL_ACC_145x145: {
            return "14.5 x 14.5";
        } break;
        case HL_ACC_SILK_ELASTIC: {
            return "Silk and elastic";
        } break;
        case HL_ACC_ADJ_BACKING: {
            return "Adjustable backing";
        } break;
        case HL_ACC_LEATHER_ELASTIC: {
            return "Leather and Elastic";
        } break;
        case HL_ACC_1_WIDE: {
            return "1 inch wide";
        } break;

		default: {
			return "unknown";
		} break;
	}
}