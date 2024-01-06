import { Document } from 'mongoose';
import { v4 } from 'uuid';

import { MovieAbstractModel, MovieModel } from './models/movie.model';
import { MovieSchema } from './schema/movie.schema';
import { MovieInputDTO } from './dto/movie.dto';
import { IMoviesRepository } from './interfaces/IMovies.repository';

export default class MoviesRepository implements IMoviesRepository<MovieAbstractModel> {
  public async findAll(): Promise<(Document<unknown, {}, MovieModel>)[]> {
    try {
      return MovieSchema.find().exec();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async findById(id: string): Promise<(Document<unknown, {}, MovieModel>) | null> {
    try {
      return MovieSchema.findOne({ _id: id }).exec();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async save(movie: MovieInputDTO): Promise<(Document<unknown, {}, MovieModel>)> {
    try {
      return MovieSchema.create(movie);
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async delete(id: string): Promise<any> {
    try {
      return MovieSchema.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async update(movie: MovieModel): Promise<(Document<unknown, {}, MovieModel>) | null> {
    try {
      return MovieSchema.findByIdAndUpdate(movie._id, movie, { new: true }).exec();
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  public async getStorageUrl(id: string): Promise<(Document<unknown, {}, MovieModel>) | null> {
    try {
      return MovieSchema.findById({ _id: id }, ["storageUrl"]);
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  private getDescription(_description: string): string {
    let newDescription = '';

    for (let i = _description.length - 1; i >= 0; i--) {
      newDescription += _description.charAt(i);
    }

    newDescription += ` ${_description}`;

    return newDescription;
  }
}

const movies = [
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    storageUrl: `D:\\pre_upload\\Pink Latex Catsuit Bitch Fucked Hard - Pornhub.com.mp4`,
    title: 'Pink Latex Catsuit Bitch Fucked Hard',
    date: '2020-01-01',
    duration: 459
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Adira Allure is a ravishing blondie that loves for her holes to get stuffed. She puts on her hottest skimpy outfit and dances for you to get the mood just right. She pulls down her panties to give you a peek of what she has waiting, a ripe pussy and even tighter asshole! She gets her asshole and pussy stretched and stuffed for the camera!`,
    storageUrl: `D:\\pre_upload\\Adira Allure Loves When Her Asshole And Pussy Get Stretched .mp4`,
    title: 'Adira Allure loves when her asshole and pussy get stretched and stuffed',
    date: '2020-12-29',
    duration: 2061
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Adriana Chechik brings the HEAT! Are you ready to be transcended to the depths of this amazing filth that she has in store for you!? She gets her asshole nice and oiled up and stretched before being rammed the deepest she can take it by that big throbbing dick! She projectile squirts all while cumming over and over!`,
    storageUrl: 'D:\\pre_upload\\Adriana Chechik Lets A Big Dick Stretch And Stuff Her Oily H.mp4',
    title: 'Adriana Chechik lets a big dick stretch and stuff her oily holes',
    date: '2021-07-09',
    duration: 2824
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Aiden Ashley puts on an extremely sexy red lingerie set and dances in the mirror to get you going. She talks about the first time she ever squirted, and it happened to be on accident! Make no mistake here, this wild babe has an extra wet pussy that gets everything soaking!`,
    storageUrl: 'D:\\pre_upload\\Aiden Ashley Squirts Uncontrollably While Being Pounded Out .mp4',
    title: 'Aiden Ashley squirts uncontrollably while being pounded out',
    date: '2020-12-03',
    duration: 2206
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Alexa Nicole looks deliciously naughty in her micro skirt, g-string and thigh high stockings. That outfit screams I want to get fucked, which is exactly what happens! Alexa gives up every hole to her stud who fucks her pussy and fingers her tight asshole.`,
    storageUrl: 'D:\\pre_upload\\Alexa Nicole has her asshole fingered as her man pumps her p.mp4',
    title: 'Alexa Nicole has her asshole fingered as her man pumps her pussy full',
    date: '2018-12-16',
    duration: 2182
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Alexa Nicole likes to slut it up. She feels most sexy when she's in naughty lingerie that is built for sex. We are talking crotchless fishnets and thigh high leather boots. Her pussy is wet before this stud even touches her tits, so he sticks it in and fucks her hard!`,
    storageUrl: 'D:\\pre_upload\\Alexa Nicole is fucked in crotchless fishnets and leather th.mp4',
    title: 'Alexa Nicole is fucked in crotchless fishnets and leather',
    date: '2022-10-15',
    duration: 1630
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Amber Rayne takes her sexual play to the extreme! All dressed up to hit the field, Amber decides to stay home and get some batting practice in her butt, instead. Deepthroating her man always puts her in the mood for more, but his big dick in her ass just isn't big enough today. This slugger gets a genuine wood up her pooper before hitting her knees to take on a double inning facial load.`,
    storageUrl: 'D:\\pre_upload\\Amber Rayne needs baseball bat up the ass before her facials.mp4',
    title: 'Amber Rayne needs baseball bat up the ass before her facials'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `April Olsen got that A1 sauce! She's lubed up and ready to have that tight pussy drilled deep with dick! Not only is her pussy oozing and all wet and juicy, but she is excited to let that massive dick get all up in her ASSHOLE too!`,
    storageUrl: 'D:\\pre_upload\\April Olsen Takes A Throbbing Cock Up Her Ass Bang Premium.mp4',
    title: 'April Olsen takes a throbbing cock up her ass',
    date: '2021-09-29',
    duration: 2573
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Autumn Falls wears a pair of barely there jeans shorts that are so tiny her thick ass cheeks pop right out of them! To tease you she kneels on a clear white chair and smashes her big titties against it so they look even bigger and juicier! She begs for cock in her pussy and keep cumming over and over as he pounds her out up against the stairwell. Autumn can't get enough of his cock so she sits him down and shows him just how good she can ride his thick meat!`,
    storageUrl: 'D:\\pre_upload\\Autumn Falls Cums Uncontrollably From A Hard Dick Lashing.mp4',
    title: 'Autumn Falls cums uncontrollably from a hard dick lashing',
    date: '2019-05-16',
    duration: 1813
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Beverly Hills immediately knew which unfulfilled sex dream she was going to live out because it included latex and double penetrations, two of her favorite things. Beverly is one kinky slut and she is always down to play with two dicks, especially if she gets to get on all fours and take them both at the same time!`,
    storageUrl: 'D:\\pre_upload\\Beverly Hills Gets A Deep Double Penetration From Two Big Di.mp4',
    title: 'Beverly Hills Gets A Deep Double Penetration From Two Big Dicked Studs'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Blake Blossom is a blonde bombshell that gets herself nice and pretty with amazing hair and makeup. Her natural titties are popping out of her white lingerie, and she is excited to experience a brand new dick today. She gets extra playful on the bed to tease that boner, before spreading that pussy and begging for cock to be jammed inside.`,
    storageUrl: 'D:\\pre_upload\\Blake Blossom Gets Jammed Deep By A New Dick Bang Premium.mp4',
    title: 'Blake Blossom Gets Jammed Deep By A New Dick'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Brenna Sparks is a very bad girl that loves to be spanked! She wears seductive red lingerie that pushes up her titties and barely covers her rock hard nipples! Today she's been extra naughty so she gets her throat and pussy stuffed with two cocks! See Brenna throat one down while her pussy gets filled at the same time! They take turns using her tight hole and mouth before both blowing their creamy loads all over her face.`,
    storageUrl: 'D:\\pre_upload\\Brenna Sparks gets her mouth and pussy fucked by two cocks.mp4',
    title: 'Brenna Sparks gets her mouth and pussy fucked by two cocks',
    data: '2019-04-25',
    duration: 2482
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Carmen Caliente's name suits her because she is just about as hot as they cum! She has a body that fantasies are made of and you get to see her put on a little striptease poolside. Wearing thigh high boots and a garter belt, Carmen shows off her sexy ass before taking the party inside and doing a full on split on his dick! With her legs out of the way he goes balls deep and bounces his dick off of her g-spot to give her a huge body shaking orgasm!`,
    storageUrl: 'D:\\pre_upload\\Carmen Caliente Pulls Her Legs Back And Does A Split On His .mp4',
    title: 'Carmen Caliente pulls her legs back and does a split on his dick',
    data: '2019-04-18',
    duration: 1886
  },
  { 
    id: v4(),
    description: `Dahlia Sky loves her anal pleasures! Manuel Ferrara spends as much time eating her ass as he does her pussy. He ends up spending more time in her sweet ass than in her pussy, but that's just what Dahlia wants! His thick dick leaves her anus gaping when he pulls out to launch his load all over her beautiful face!`,
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    storageUrl: 'D:\\pre_upload\\Dahlia Sky Gets Her Ass Gaped And Eats A Facial Creampie Ban.mp4',
    title: 'Dahlia Sky gets her ass gaped and eats a facial creampie',
    data: '2017-06-02',
    duration: 2329
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Marina Beaulieu and Eva Lange just finished a naughty photo shoot and they were both feeling horny, so they decided to fuck the crew! Two guys, two chicks it was a perfect set up as they get on the couch and bang it out. Eva loves fucking in the same room with other people. To see them, hear them and smell them doing it gets her off super hard.`,
    storageUrl: 'D:\\pre_upload\\Eva Lange And Marina Beaulieu Fuck In The Same Room And Eva .mp4',
    title: 'Eva Lange and Marina Beaulieu fuck in the same room and Eva likes to watch!',
    date: '2022-06-07',
    duration: 1546
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Gia Derza loves showing off her pretty pussy while her ass is bedazzled with a butt plug. Gia is model gorgeous but she's got a craving for cock that lead her to the adult entertainment industry rather than the runway. See our stud pull her cheeks apart so you can see that pretty shaved pussy as her ass is rammed full of thick dick.`,
    storageUrl: 'D:\\pre_upload\\Gia Derza Has Her Ass Rammed Full Of Thick Dick Bang Premium.mp4',
    title: 'Gia Derza has her ass rammed full of thick dick',
    date: '2019-01-30',
    duration: 2102
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Savannah Bond is a extra thick white girl that has huge tits! She oils up her whole body with slick lube and plays with herself and shows off her twerking ass. She spreads her pussy and asshole and lets his huge cock have his way with her holes! She loves to slide up and down on big dick and take a shot of oil up her asshole and pussy!`,
    storageUrl: 'D:\\pre_upload\\Hottie Gets Oiled Up And Fucked Raw - Savannah Bond Porn Vid.mp4',
    title: 'Hottie Gets Oiled Up And Fucked Raw - Savannah Bond'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Are you ready for this? Ivy Lebelle is back and this time oiled up and ready to get FUCKED! She straps on her skimpiest string bikini ands squeezes her pussy just for you. She gets her body oiled up and nice and slick and ready to tittyfuck! She deep throats his cock until it makes her eyes roll back with pleasure. He spins her around and pounds out her her stretched out asshole.`,
    storageUrl: 'D:\\pre_upload\\Ivy Lebelle Gets Her Tight Asshole Ravaged By Oily Dick Bang.mp4',
    title: 'Ivy Lebelle Gets Her Tight Asshole Ravaged By Oily Dick'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Jane Wilde is a sexy little cumslut that loves to get her asshole destroyed by cock. This petite babe shakes her perfect package of a booty and shows you exactly which holes are going to be stretched to their max! She's got a seductive bushy pussy and a gaping asshole that is sure to get you nice and hard. Watch this babe get her holes stretched and filled by daddy!`,
    storageUrl: 'D:\\pre_upload\\Jane Wild Has A Craving For Cock In Her Ass Bang.mp4',
    title: 'Jane Wild Has A Craving For Cock In Her Ass'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Joanna Angel is all dressed up in her perfect lingerie and she is ready to get down and dirty. This fun-sized babe has a pair of perfect perky tits and a perfectly packaged tight booty. She loves to gag on dick and ride cock until she cums over and over. Her perfectly trimmed bushy pussy is right in your face as she spreads her perfect pussy lips and rides!`,
    storageUrl: 'D:\\pre_upload\\Joanna Angel Has Big Tits And A Ripe Pussy Bang.mp4',
    title: 'Joanna Angel Has Big Tits And A Ripe Pussy'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Kali Roses is a gorgeous blondie with a petite waist, perky hard nipples and a canvas of tattoos. She shows off her naughty body on the balcony in the California sun before going back to the house to be greeted by a rock hard cock between her legs. Her pussy is dripping wet as he licks her asshole, making her wait for his thick dick. He pulses just the tip inside of her to make her beg for it before he has his way with her perfect body all over the mansion!`,
    storageUrl: 'D:\\pre_upload\\Kali Roses Gets Her Perfect Pussy Filled With Cock Bang Prem.mp4',
    title: 'Kali Roses Gets Her Perfect Pussy Filled With Cock'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Kayley Gunner is a sensual sex kitten that loves to show off her amazing body. She slides up her amazing snakeskin thigh-high boots and her hottest lingerie. Her sex appeal is off the charts, wait till she starts rubbing her perfect clit! She loves to get her tight pussy licked and devoured before jumping up on his dick and taking a ride!`,
    storageUrl: 'D:\\pre_upload\\Kayley Gunner Is A Smoking Hot Sex Kitten Bang Premium.mp4',
    title: 'Kayley Gunner Is A Smoking Hot Sex Kitten'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Kendra Spade rubs her tight pussy and masturbates for you to see. Her pussy gets extra wet and she squirts all over the camera! She gets on top and starts swallowing his dick and she tastes her sweet pussy juice. He lays her out on the couch and pounds out her tight bushy pussy before making her cum and squirt over and over!`,
    storageUrl: 'D:\\pre_upload\\Kendra Spade Is A Dirty Squirting Cumslut Bang Premium.mp4',
    title: 'Kendra Spade Is A Dirty Squirting Cumslut'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Lily Lane is a smoking hot babe that loves to play with her wet pussy and talk dirty. She rubs it up and down and he shoves his cock deep down her throat to start it off. He spins her around and stuffs her pussy before pulling out and fingering her to make her squirt all over the camera! She begs for more dick and he stretches open her asshole and makes her squirt even more while fucking her tight asshole!`,
    storageUrl: 'D:\\pre_upload\\Lily Lane Is A Tattooed Slut That Gets Her Asshole Gaped Ban.mp4',
    title: 'Lily Lane Is A Tattooed Slut That Gets Her Asshole Gaped'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Liv Revamped is stripper at heart and begins working the pole like you wouldn't believe, but all she wants to do is to get rammed. Luckily, we gave her a big pole to get fucked with and she slurped every bit of cum out of it.`,
    storageUrl: 'D:\\pre_upload\\Liv Revamped Works A Stripper Pole Then Gets Rammed Bang Pre.mp4',
    title: 'Liv Revamped Works A Stripper Pole Then Gets Rammed'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Maya Woulfe has a perfect petite body that looks absolutely amazing in a barely there string bikini. She's a seductive hottie that brings her A game when the camera starts rolling. She's got a clear butt plug that is preparing her tight asshole to be stretched with cock!`,
    storageUrl: 'D:\\pre_upload\\Maya Woulfe Is Down For Some Deep Anal Bang.mp4',
    title: 'Maya Woulfe Is Down For Some Deep Anal'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Maya Woulfe unzips her mini skirt and reveals a skimpy racing stripe bikini that is sure to get your engine revving. She spreads her pussy lips and zeros in on her amazing clit, prepped and ready to get her to orgasm. She loves to jump up on top and ride that dick and cum!`,
    storageUrl: 'D:\\pre_upload\\Maya Woulfe Spreads Her Pussy Lips Bang Premium.mp4',
    title: 'Maya Woulfe Spreads Her Pussy Lips'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Nicole Doshi is an Asian goddess who loves to get wet and sloppy while fucking. After getting her ass eaten she gives a sloppy blowjob, gets her wet shaved pussy fucked and then takes a cock up her ass. After sucking his balls and eating his ass, she gets a messy facial.`,
    storageUrl: 'D:\\pre_upload\\Nicole Doshi Gets Fucked In Her Tight Asian Ass.mp4',
    title: 'Nicole Doshi Gets Fucked In Her Tight Asian Ass',
    data: '2022-10-26',
    duration: 2311
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Payton Preslee is a smoking hot babe with perfect giant tits that you just want to get smothered by! She dresses up in extra sexy purple lingerie and is ready for her tight delicious pussy to be destroyed by dick. She plays with her pierced titties and rubs her pussy to get it extra soaking wet when he slips inside and fucks her hard!`,
    storageUrl: 'D:\\pre_upload\\Payton Preslee Has The Hottest Tits And The Wettest Pussy.mp4',
    title: 'Payton Preslee has the hottest tits and the wettest pussy',
    data: '2020-06-09',
    duration: 1722
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Payton Preslee is a mischievous slut that has an amazingly well rounded body. Her tits are absolutely stupendous and round, and her amazing booty claps when she twerks by the pool. She giggles her massive tits in your face and shows you her pieced clit to give you that special tease. This hottie gets used by a massive dick today on camera!`,
    storageUrl: 'D:\\pre_upload\\Payton Preslee Wants To Smother Your Face With Her Titties B.mp4',
    title: 'Payton Preslee wants to smother your face with her titties',
    data: '2021-08-20',
    duration: 1766
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: ``,
    storageUrl: 'D:\\pre_upload\\Pink Latex Catsuit Bitch Fucked Hard - Pornhub.com.mp4',
    title: 'Pink Latex Catsuit Bitch Fucked Hard',
    stars: ['CandyXS']
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Lauren Phillips loves to have her long red hair played with, so Manuel Ferrara makes it a point to stroke and tug a little during their foreplay. Her big tits bounce playfully while she's getting Manuel's bone buried in her hairy pussy. But she's in the mood for anal, and Manuel leaves her ass gapped before spraying her pretty face with all the cum in his sac.`,
    storageUrl: 'D:\\pre_upload\\Redhead Lauren Phillips Gets Ass Gapped While Getting Banged.mp4',
    title: 'Redhead Lauren Phillips gets ass gapped while getting banged Gonzo style'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Savannah Bond has the best big titties and she has an amazingly gorgeous face to match. When you aren't staring at her massive tits, watch her holes get lubed up and stuffed with thick throbbing cock. This blonde babe takes dick like a champ!`,
    storageUrl: 'D:\\pre_upload\\Savannah Bond gets lubed up and fucked in the butt .mp4',
    title: 'Savannah Bond gets lubed up and fucked in the butt'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: ``,
    storageUrl: 'D:\\pre_upload\\Sexy_Suzi_25564_hd1080.mp4',
    title: 'Sexy_Suzi_25564_hd1080'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Spencer Bradley is a fun-sized treat that has an enormous amount of pent up sexual energy! She's a petite ball of fun! When she opens her gorgeous eyes and strokes her pussy, you see how much pleasure she gets from stroking her precious kitty. She is down to fuck and gets into some naughty play in her tight asshole!`,
    storageUrl: 'D:\\pre_upload\\Spencer Bradley Is A Petite Cumslut With Big Sexual Energy B.mp4',
    title: 'Spencer Bradley Is A Petite Cumslut With Big Sexual Energy'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Stella Cox meets Manuel Ferrara outside for a deep penetration of her ass only! Dressed as a new bride who's only saved one hole for her husband, Stella looks stunning in white stockings, high heels, and a bra which is quickly discarded so that her large breasts can be fondled. Stella takes Manuel's huge, thick dick deep in her ass in every position possible, struggling in some of them to manage his huge man meat. In this totally unscripted Gonzo style production, see the real Stella in action!`,
    storageUrl: 'D:\\pre_upload\\Stella Cox Takes Manuel Ferrara\'s Huge Dick In All Anal Gonz.mp4',
    title: 'Stella Cox Takes Manuel Ferrara\'s Huge Dick In All Anal Gonz'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Tigerr Benson is a sexy Asian with big tits, dark nipples and a thick ass. She's bound by a thick rope that restrains her wrists to an A frame so she can straddle her masters cock as he fucks her deep. He uses her in every way until he blows a massive load all over her face.`,
    storageUrl: 'D:\\pre_upload\\Tigerr Benson gets a massive load to the face after a deep f.mp4',
    title: 'Tigerr Benson gets a massive load to the face after a deep fuck'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Victoria Voxxx gets off hard on light bdsm play. She enjoys having her throat restrained and she starts this scene out bound to the ceiling. Her tattooed stud plays with her tits to make her pussy wet before letting her down so she can work his cock and so it exactly how he says.`,
    storageUrl: 'D:\\pre_upload\\Victoria Voxxx gets off on light bdsm play when she fucks he.mp4',
    title: 'Victoria Voxxx gets off on light bdsm play when she fucks her man'
  },
  { 
    id: v4(),
    coverUrl: 'https://ucarecdn.com/979d495e-293f-4335-906f-821cf6ca1aec/-/preview/500x500/-/quality/smart/-/format/auto/',
    description: `Winter Jade has some shocking purple hair and an even more shocking sexual tension that she wants to get out! She swirls her cute petite body around and strips down her matching lingerie. She's got a feisty bush covering her juicy pussy and she loves to spread her pussy lips and show you where that cock drives in deep!`,
    storageUrl: 'D:\\pre_upload\\Winter Jade Lets A Huge Dick Probe Her Tight Pussy Bang Prem.mp4',
    title: 'Winter Jade Lets A Huge Dick Probe Her Tight Pussy'
  },
];