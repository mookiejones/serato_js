interface ISong{


    //PUBLIC PROPERTIES
    /// <summary>
    /// The title of the song
    /// </summary>
    Title: string ;


    /// <summary>
    /// The artist who performs the song
    /// </summary>
    Artist: string ;


    /// <summary>
    /// The album the song appears on
    /// </summary>
    Album: string ;

    /// <summary>
    /// The genre of the song
    /// </summary>
    Genre: string ;

    /// <summary>
    /// The length of the song
    /// </summary>
    Length: string ;

    /// <summary>
    /// The size of the song
    /// </summary>
    Size: string ;

    /// <summary>
    /// The file type of the song
    /// </summary>
    Type: string ;

    /// <summary>
    /// The string representation of the path to the song
    /// </summary>
    PathString: string ;

    /// <summary>
    /// The bitrate of the song
    /// </summary>
    Bitrate: string ;

    /// <summary>
    /// The sample rate of the song
    /// </summary>
    SampleRate: string ;

    /// <summary>
    /// The beats per minute of the song
    /// </summary>
    Bpm: string ;

    /// <summary>
    /// The contents of the comment field
    /// </summary>
    Comment: string ;

    /// <summary>
    /// The contents of the group field
    /// </summary>
    Group: string ;

    /// <summary>
    /// The composer of the song
    /// </summary>
    Composer: string ;

    /// <summary>
    /// The year that the song was released
    /// </summary>
    Year: string ;

    /// <summary>
    /// The key the song is in
    /// </summary>
    Key: string ;

    /// <summary>
    /// Whether or not the song has been marked as missing
    /// </summary>
    IsMissing: boolean;


    /// <summary>
    /// Whether or not the song has been marked as played
    /// </summary>
    IsPlayed: boolean ;


}


export default ISong;