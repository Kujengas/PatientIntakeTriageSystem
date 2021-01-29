using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientIntake.WebClientTest1
{

    public partial class TestUsers
    {
        public List<Result> Results { get; set; }
        public Info Info { get; set; }
    }

    public partial class Info
    {
        public string Seed { get; set; }
        public long? Results { get; set; }
        public long? Page { get; set; }
        public string Version { get; set; }
    }

    public partial class Result
    {
        public Gender? Gender { get; set; }
        public NameClass Name { get; set; }
        public Location Location { get; set; }
        public string Email { get; set; }
        public Login Login { get; set; }
        public Dob Dob { get; set; }
        public Dob Registered { get; set; }
        public string Phone { get; set; }
        public string Cell { get; set; }
        public Id Id { get; set; }
        public Picture Picture { get; set; }
        public Nat? Nat { get; set; }
    }

    public partial class Dob
    {
        public DateTimeOffset? Date { get; set; }
        public long? Age { get; set; }
    }

    public partial class Id
    {
        public NameEnum? Name { get; set; }
        public string Value { get; set; }
    }

    public partial class Location
    {
        public Street Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public Country? Country { get; set; }
        public Postcode? Postcode { get; set; }
        public Coordinates Coordinates { get; set; }
        public Timezone Timezone { get; set; }
    }

    public partial class Coordinates
    {
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }

    public partial class Street
    {
        public long? Number { get; set; }
        public string Name { get; set; }
    }

    public partial class Timezone
    {
        public Offset? Offset { get; set; }
        public Description? Description { get; set; }
    }

    public partial class Login
    {
        public Guid? Uuid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public string Md5 { get; set; }
        public string Sha1 { get; set; }
        public string Sha256 { get; set; }
    }

    public partial class NameClass
    {
        public Title? Title { get; set; }
        public string First { get; set; }
        public string Last { get; set; }
    }

    public partial class Picture
    {
        public Uri Large { get; set; }
        public Uri Medium { get; set; }
        public Uri Thumbnail { get; set; }
    }

    public enum Gender { Female, Male };

    public enum NameEnum { Avs, Bsn, Cpr, Dni, Empty, Fn, Hetu, Insee, Nino, Pps, Ssn, Tfn };

    public enum Country { Australia, Brazil, Canada, Denmark, Finland, France, Germany, Iran, Ireland, Netherlands, NewZealand, Norway, Spain, Switzerland, Turkey, UnitedKingdom, UnitedStates };

    public enum Description { AbuDhabiMuscatBakuTbilisi, AdelaideDarwin, Alaska, AlmatyDhakaColombo, AtlanticTimeCanadaCaracasLaPaz, AzoresCapeVerdeIslands, BaghdadRiyadhMoscowStPetersburg, BangkokHanoiJakarta, BeijingPerthSingaporeHongKong, BombayCalcuttaMadrasNewDelhi, BrazilBuenosAiresGeorgetown, BrusselsCopenhagenMadridParis, CentralTimeUsCanadaMexicoCity, EasternAustraliaGuamVladivostok, EasternTimeUsCanadaBogotaLima, EkaterinburgIslamabadKarachiTashkent, EniwetokKwajalein, Hawaii, Kabul, KaliningradSouthAfrica, Kathmandu, MagadanSolomonIslandsNewCaledonia, MidAtlantic, MidwayIslandSamoa, MountainTimeUsCanada, Newfoundland, PacificTimeUsCanada, Tehran, TokyoSeoulOsakaSapporoYakutsk, WesternEuropeTimeLondonLisbonCasablanca };

    public enum Offset { Offset100, Offset1000, Offset1100, Offset200, Offset300, Offset330, Offset400, Offset500, Offset600, Offset700, Offset800, Offset900, The000, The100, The1000, The1100, The1200, The200, The300, The330, The400, The430, The500, The530, The545, The600, The700, The800, The900, The930 };

    public enum Title { Madame, Mademoiselle, Miss, Monsieur, Mr, Mrs, Ms };

    public enum Nat { Au, Br, Ca, Ch, De, Dk, Es, Fi, Fr, Gb, Ie, Ir, Nl, No, Nz, Tr, Us };

    public partial struct Postcode
    {
        public long? Integer;
        public string String;

        public static implicit operator Postcode(long Integer) => new Postcode { Integer = Integer };
        public static implicit operator Postcode(string String) => new Postcode { String = String };
    }
}

