const books = [
  {
    id: '1',
    name: 'إلى الله',
    image: require('../assets/images/books/26.jpg'),
    price: '180 EPG',
    rating: 3.2,
    liked: true,
    reviews: 300,
    description:
      'كتاب يصحبك في الرحلة، يضيء لك الطريق، ويمهد لك السبيل، يرشدك إلى برّ الأمان، ويوفّر لك زاد الرحلة.. الرحلة إلى الله.',
  },
  {
    id: '2',
    name: 'استراحة نفسية',
    image: require('../assets/images/books/27.jpg'),
    price: '190 EPG',
    rating: 4.1,
    liked: true,
    reviews: 350,
    description:
      'كتاب يمزج بين العلم والدين والفلسفة، ليصنع وعيًا جديدًا يقودنا لحياة ذات صحة نفسية أفضل.',
  },
  {
    id: '3',
    name: 'يوتوبيا',
    image: require('../assets/images/books/30.jpg'),
    price: '100 EPG',
    rating: 4.3,
    liked: true,
    reviews: 450,
    description:
      'رواية اجتماعية للكاتب المصري أحمد خالد توفيق، صدرت في عام 2008 وتعتبر هي الرواية الأولى له التي تصدر خارج المؤسسة العربية الحديثة، وقد جاءت الرواية في المركز الثاني في قائمة أكثر الكتب مبيعاً في دار ميريت.',
  },
  {
    id: '4',
    name: 'إلى ما لا نهاية',
    image: require('../assets/images/books/50.jpg'),
    price: '90 EPG',
    rating: 3.1,
    liked: true,
    reviews: 200,
    description:
      'رواية أسطورية، يمتزج فيها الخيال بالواقع، فلا تعرف أين هي الحقيقة، الخيال أم الواقع، قصة حب ملحمية، تتحول فجأة إلى رحلة تبحر معك إلى التاريخ، تطوف بك الدنيا وتتركك متلهفاً لاكتشاف النهاية التي حتماً ستفاجئك.لا يمكن اعتبارها رواية رومانسية فقط ولا رواية أسطورية تاريخية فقط، هي درب من هذا وذاك. ',
  },
  {
    id: '5',
    name: 'ما رواه البحر',
    image: require('../assets/images/books/51.jpg'),
    price: '90 EPG',
    rating: 2.9,
    liked: true,
    reviews: 150,
    description:
      'إنها حكاية استثنائية لا يرويها أصحابها هذه المرة.. لكنها حكاية يرويها البحر بنفسه، يروي الحياة من منظوره، من القاع وليس السطح، من الغرق لا النجاة، من منظور القدر لا البشر.يحدث أن يزيل همومنا همُ أكبر ويُهدينا القدر لحظة حبٍ صادقةٍ تأخذ بأيدينا نحو الآمان من جديد.في هذه الحكاية يحكي لنا البحرعن “عاصي” ومأساة افتقاده لحبيبته “ورد” وشعوره القاتل نحوها بالحنين. هو رجل أهلكه الحب حقًا، لكنه لسبب لا يعلمه ظل متمسكًا بالأمل حتى اللحظة الأخيرة.وفي هذه الحكاية أيضًا يحكي لنا البحر عن “ليل”، تلك الفتاة الغجرية الجميلة وسرها الأكبر الذي أخفته عن العالم أجمع. حتى بعد أن التقت “عاصي” واعترفا لبعضهما بكل شي. لا ذلك السر الذي يقلب الأمور كلها رأسًا على عقب.تتداخل الحكايات كلها في لحظة واحدة، ويبقى الموج وحده شاهدًا على كل منها، يبتلع الفرح مع الألم مع الندم.. ليصيغ لنا حكاية نادرة عن الحب والحنين والأمل المفقود.إنها حكاية استثنائية لا يرويها أصحابها هذه المرة.. لكنها حكاية يرويها البحر بنفسه.',
  },
  {
    id: '6',
    name: 'ماذا لو',
    image: require('../assets/images/books/54.jpg'),
    price: '120 EPG',
    rating: 2.1,
    liked: true,
    reviews: 100,
    description:
      'ماذا لو كان بإمكانك أن تعيش حياة أخرى بطريقتك الخاصة؟ .. ربما يقابل بطل حكايتنا “شمس” فتاة تغير مفهوم الحياة بالنسبة إليه، ربما يستعيد الحبيبة التي خسرها لقلة نضجه ولم يستطع تخطيها؛ أو يتحول إلى عبقري يحقق الأحلام المستحيلة، وربما يجد كل من فقدهم بالمو ت ما زالوا أحياء يرزقون .. في هذه المغامرة سنخطو خارج حدود عالمنا التقليدي، سنقترب من المجهول، وننتصر على الخوف مما قد يحدث خارج بقاع الأرض المحدودة. لكن المواجهة ستحدث، وسيتحتم على “شمس” الإجابة عن كل الأسئلة .. هل تكمن التعاسة في ضربات القدر؟ أم في طريقة تقبله؟ .. هل نحن بالفعل أسرى مخاوفنا الوهمية التي تتحكم في قراراتنا وتتحكم في مستقبلنا؟ ..  هل ستعيد الفرصة الثانية ما فقدناه، خاصة بعد ما كسرنا الحزن في المحاولة الأولى؟ أم أنها دائرة مغلقة في نهاية الأمر؟ .. رحلة ممتعة غاية في التشويق نخوضها برفقة الحب والأمل، في حكاية استثنائية لو تمسكنا فيها بضميرنا الفطري، سيرشدنا في النهاية إلى طريق الوصول، وربما طريق العودة أيضا! ..',
  },
  {
    id: '7',
    name: 'في قلبي أنثى عبرية',
    image: require('../assets/images/books/73.jpg'),
    price: '90 EPG',
    rating: 4.5,
    liked: true,
    reviews: 500,
    description:
      'هي رواية ذات طابع ديني خطت أحداثها الكاتبة التونسية خولة حمدي، رواية حب ومقاومة من داخل أعماق المجتمع اليهودي.رواية مستوحاة من قصة واقعية بين تونس ولبنان وفرنسا، بين الإسلام واليهودية والمسيحية، بين الحب والحرب، بين الحياة والموت، بين إنسان وإنسان.. لقصة "ندى" الفتاة التونسية اليهودية التي تربت بين أحضان عائلة يهودية وبين ثنايا مدينة قانا العتيقة في الجنوب اللبناني، كانت "ندى" ملتزمة بدينها اليهودي إلى اليوم الذي دخل لحياتها شخصين واعتنقت الإسلام بعد تأثرها شخصية مسلمة يتيمة الأبوين إسمها "ريما" الفتاة البريئة الجميلة التي تتمنى الهداية لكل من تحب، الفتاة التي تربت بين أحضان اليهود، الفتاة المواظبة على دينها وحجابها وأخلاقها، تتكرر اللقاءات وتحضر "ندى" دروس الدين الإسلامي التي كان يعطيها "أحمد" لريما في منزلها في لبنان، الأمر الذي يؤدي إلى غضب والدتها عليها وطردها من المنزل وتعذيبها، لتخرج كلا منهما وتسير بها إلى موعد مع القدر، تغيرت حياتها وحياة كل من تعرف 180 درجة بعد ما التقيت بشاب لبناني مسلم من أحد جنود المقاومة ومن هنا تبدأ قصتهما ويقعا في الحب، ستترك بصمة في حياتهما..',
  },
  {
    id: '8',
    name: 'غربة الياسمين',
    image: require('../assets/images/books/78.jpg'),
    price: '90 EPG',
    rating: 4.3,
    liked: true,
    reviews: 450,
    description:
      'تطوف بنا الرواية فوق سحب من سماء باريس الملبدة بالغيوم المشحونة بالعنصريات التي اختلقتها وسائل الاعلام وحشرت مبادئها البغيضة حشرا في عقول المواطنين الفرنسيين .. هناك حيث يتفتح الياسمين في أرض غير صالحة للنمو .. فوق مقاصل الارهاب ومشانق الحجاب .. حين تحدّثتا عن موضوع السّفر لأوّل مرّة، تكلّمت أمّها فاطمة بشيء من الفلسفة. حدّثتها عن نبات الياسمين الذي أعطتها اسمه. مثل الياسمين، ربّتها على القناعة والاكتفاء بالقليل. فهو نبات لا يحتاج إلى الكثير من العناية. تكفيه دفعة واحدة من السّماد في ربيع كلّ عام، وتربة رطبة دون فيض من السقيا.جميع أنواع الياسمين تفضل النّموّ في مكان مشمس، لكنّها تتحمّل وجود شيء من الظلّ. وشمس تونس كانت مواتية لنضجها وتكوين شخصيّتها، وقد أصبحت جاهزة لتحمّل شيء من ظلالأوروبا ذات المناخ البارد. مثل الياسمين الأبيض المتوسّطي، كانت رقيقة في مظهرها، لكنّ شخصيّتها قويّة وثابتة، مثل رائحة الياسمين النفّاذة والفريدة التي تبثّ إحساسا بالدّفء لا تملكه الورود الأخرى. لم تتكلّم عن دلالة الياسمين العاطفيّة التي بحثت ياسمين عنها مذ اهتمّت بمدلولات الزهور في بداية مراهقتها. عرفت أنّ إهداء زهر الياسمين لامرأة يعني “لماذا لا تحبّين أبدًا؟”. والدها أهداها هي، ياسمين، إلى والدتها. كانت آخر عطاياه لها حين تخلّى عن حضانتها إثر الطّلاق. وهي “لم تحبّ بعده أبدًا”. كانت جديرة بتقبّل زهرة الياسمين. تفتقد أمها كل يوم أكثر من اليوم الماضي. مع مرور الوقت تزداد يقينًا من ضياعها بدونها. كانت تعلم أن الغربة ليست تجربة سهلة، ومع ذلك وافقت على سفرها. علّمتها كيف تكون ياسمينة حقيقيّة. لكن لعلّها غفلت عن حقيقة مرّة. زهرة الياسمين تذبل بسرعة حين تغادر تربتها وتنسّق في شكل “مشموم” جميل. ',
  },
  {
    id: '9',
    name: 'أن تبقى',
    image: require('../assets/images/books/77.jpg'),
    price: '90 EPG',
    rating: 3.9,
    liked: true,
    reviews: 310,
    description:
      'عندما تصبح موضة عند الفرنسيين أن يهبوا أولادهم أسماء شرقية كنوع من مواكبة العولمة و تحطيم الحدود الجغرافية التي تصّر دولتهم على حمايتها بأسلاك شائكة. في رواية أن تبقى كان خليل دانييل الشاوي محامِ فرنسي من أصول عربية، يسعى دائما لإثبات ولائه والهروب من الإحساس المُلازم بأنه دخيل. فأثناء فترة ترشحه في مجلس النواب فوجئ بالماضي يطرق بابه لِيُعلِن عن تاريخ لم يكن يعرف عنه شئ. فبعد أعوام عديدة من رحيل والده تصله الحكاية الكاملة عن رحلة هجرة والده الغير شرعية من الجزائر لأرض الأحلام -فرنسا. تظل د.خولة حمدي مبهرة في اختيارها لطرق سرد الأحداث ومناقشة المواضيع المحظورة من أبعاد مختلفة، وبناء شخصيات مُرَكبة غير متوقعة ومنتقية في آنٍ واحد. الهجرة الغير شرعية موضوع نوقش وعايشناه مرارا وتكرارا حتى فهمنا أسبابه ونتائجه! لكننا لم نتكلم قط عن حياة المحظوظين الذين لم يهلكوا في الطريق، ووصلوا لبر الأمان كما نسميه. هل أرض الأحلام تحتضن اللاجئين لها أم هو السراب بعينه؟ أم هو سيناريو ثالث يجمع ما بين الإثنان؟من أهم ما ستعيشه مع نادر الشاوي في هذه الرواية؛ أن رؤية الأحلام تتحقق في الجانب الآخر من العالم، ما هو إلا إختيار. فإما أن تختار الأحلام وتحارب من أجلها على يقين أنك ستواجه الموت مرات عديدة في طريقك أو تختار الواقع الملموس! فهو رجل آمن يكل ما فيه أن مشكلة الحياة هي أننا نعيشها مرة واحدة، فلا نحظى بفرص لنصلح أخطائنا أو نُعدِل إختيارانا المبنية على أسس غير ثابتة! رواية أن تبقى لن تحثك على حب الوطن والعمل من أجله، بل ستريك نتائج إختيارات بسيطة أثناء السعي وراء الأحلام الوردية، أحلام المكوث في بلد أجنبي عادل يحترم حريتك. فعندما تتشابك خيوط قصة خليل ووالده و يبدأ خليل أن يرتاب كل مفاهيمه ومعتقداته وحتى مخاوفه، فهل سيحتقر جذوره أم سَيُمسِي المدافع الأول عن حقوق أبناء العرب القاطنين في الغرب من أمثاله؟ أن تبقى رواية تنتزعك من أرض الوطن تاركة لجذورك في بطن تلك التربة الحية. فتتخبط و تقع مرات عديدة و تبدأ في تلقي الصفعات منذ اللحظة التي قررت فيها أن تتمرد على واقعك الرتيب، خصوصا عندما تقابل كل ما هربت منه لتجده منتظرك في بلد الأحلام، فتكتشف أنها أيضا ساحة حرب! فتظل تسأل نفسك عند كل صفعة، أتستحق الحرية تبعثر ضميري حتى التلاشي؟ أتستحق الأحلام المضي بكل ما عَلَت نفسي عليه في موطني؟ أي حرية و أي أحلام تستحق النضال و مجابهة الموت في كل خطوة؟ ظلت السنين الحالكة تزداد سوءا، كيف تظل الأحلام مفعمة بالحياة؟ هل لأن مهما بعدت عن أرض الوطن سترشدك جذورك المتشبثة بتلك التربة لا محال؟ لتكتشف أن عذابها يُمسي مضاعفا حين يختلط بإحساس الغربة المتزايد.',
  },
  {
    id: '10',
    name: 'أين المفر',
    image: require('../assets/images/books/75.jpg'),
    price: '95 EPG',
    rating: 2.9,
    liked: true,
    reviews: 200,
    description:
      'أين المفر هي رواية سياسية اجتماعية، تجمع بين الدراما، الإثارة، التشويق، والرومانسية. تبدأ رواية أين المفر في مطار تونس قرطاج مع وصول رحلة ٧٠١ فى مارس عام ٢٠١١ القادمة من جنيف ومن عليها من ركاب، منهما السفير نجيب كامل وإبنته ليلى بطلة الرواية، اللذان سافرا منذ أعوام بعد انفصال الأب والأم . عاد نجيب مع ابنته بعد ثورة تونس التى اندلعت فى ديسمبر ٢٠١٠ وهو متطلع لمستقبل أفضل لتونس، لكن الأحداث لا تسير معهما كما كان مخطط لها. تضطر الظروف ليلى أن تقضي أولى لياليها فى وطن لا تعرف عنه شئ بمفردها فى فندق، ثم تضطر للجوء لخالها رجل الأعمال الثرى ” نبيل القاسمى ” التى لا تعرف غيره فى ذلك الوطن لتعيش فى قصره معه ومع عائلته التى تتكون من أبنائه الثلاثة : ياسين ، أمين ، وفارس وزوجة ابنه ياسين، رغم عدم ارتياحها وسطهم بسبب انطباعها عن خالها وعائلته التى أخذته من حديث أبيها عنهم. اسقبلتها عائلة خالها بالترحاب ماعدا فارس! نتعمق فى كل شخصية وعلاقتها مع الشخصية الأخرى ونكتشف الحقائق وتكشف الكاتبة لنا الشخصيات وتوضح لنا حقيقة كل منها فلا يدوم الانطباع الأول لأى شخصية. نسير مع ليلى وهى تحاول التأقلم على أوضاعها الجديدة وعلى خالها وأولاده وجدتها التى تحاول تخرج التونسية العربية من داخلها فتأخذها لحلقات ذكر وتصوف وتحاول أن تعلمها اللغة العربية وتشاركها فى الأعمال الخيرية. وسط محاولات ليلى للتأقلم والعمل فى وطنها تصطدم بشك يقلب حياتها رأسًا على عقب فتظل تبحث وراء ذلك الشك وفى نفس الوقت تبحث وراء حياة أختها الغامضة. أما عن اسم الرواية أين المفر، فتلك الجملة تعد وصف دقيق لحال كل الشخصيات فكل منهم يذهب بداخل دوامة لا يستطيع الخروج منها ويظل يسأل أين المفر؟. من مميزات رواية أين المفر تطور الشخصيات وخصوصًا ليلى التى ما كانت إلا الفتاة المدللة الآتية من سويسرا ولا تعلم أى شئ عن وطنها سوى أنه وطنها ولا تهتم بثورة الوطن ولا حريته، لصحفية تجد فى المسيرات الشعبية التى تغطيها متعة شديدة. ضافت الكاتبة خولة حمدي حس كوميدى خفيف فى رواية أين المفر للتخفيف من شدة الأحداث على القارئ من خلال شخصية أمين ولكنها جعلت منه فى نفس الوقت شخصية قوية مؤثرة فلم يكن مجرد شخصية أضيفت للمرح. عد أين المفر رواية مرتبة، منظمة كما يتضح تطور أسلوب الكاتبة منذ أولى روايتها. الحوار كان جيد جدًا كعادة د. خولة فدائمًا ما يشعر القارئ بمصداقية الحوار وجمال ما به من ألفاظ فى رواياتها. لقد أعطت أيضًا لكل شخصية ثقل وأبعاد جيدة فيجد القارئ نفسه فى شخصية ما خلال رحلته مع الرواية ويظل يفهم كل شخصية أكثر وخاصة مع كل فصل عندما تتضح أكثر نوايا هذه الشخصية. رغم وقوع أحداث الرواية فى تونس إلا أن أى قارئ فى أى دولة عربية من الممكن أن يشعر بأنها تدور فى بلده فأحداث ما بعد الثورة تلك نفسها فى كل الدول العربية. ',
  },
  {
    id: '11',
    name: 'أرني أنظر إليك',
    image: require('../assets/images/books/74.png'),
    price: '100 EPG',
    rating: 4.7,
    liked: true,
    reviews: 300,
    description:
      'كتبت الدكتورة خولة حمدي روايتها هذه لتطرق مجددا موضوعا سبق وتناولته عبر رواية في قلبي انثى عبرية، عبر طرح ديني يتساءل حول وجود الله والايمان الحقيقي النابع من رحلة الانسان مع دواخله. تحكي الرواية قصة شاب تونسي ولد في عائلة متدينة، وينشأ نشأة مطرفة جعلته يكون من الحراكيين في حركة اسلامية قبل ان يعود إلى تونس من السعودية ليدرس الطب، هناك يقابل وجها اخر لنفسه، حيث تختبر عقيدته وتهتز شكوكه ويتخلخل فهمه، سراط من الالحاد نحو الايمان، تسرد فيه الروائية خولة حمدي حكاية الايمان، كيف نستشعر الله فينا. تخللت الرواية الكثير من الاستشهادات القرآنية ومن أحاديث النبوي وكطلك التراث العربي الشعري القديم.',
  },
  {
    id: '12',
    name: 'ياسمين العودة',
    image: require('../assets/images/books/76.jpg'),
    price: '120 EPG',
    rating: 4.9,
    liked: true,
    reviews: 350,
    description:
      'تكمل خولة حمدي ما بدأتة مع ياسمين وعمر ورينم أبطال غربة الياسمين . ماذ ا حدث لهم وما تعرضوا لهم .. وماهي ياسمين العودة .. أو بمعنى ادق ... ما هو حق العودة ما هو حق العودة  تتناول برواياتها عدداً من القضايا الهامة .. كمعاناة الشباب المغترب فى دول اوروربا .. وتلقي الضوء بشكل خاص على القضية الفلسطينية وحق العودة من منظور عربي وعيون عربية.. ياسمين العودة .. أم حق العودة.',
  },
  {
    id: '13',
    name: 'الزعفرانة',
    image: require('../assets/images/books/49.jpg'),
    price: '150 EPG',
    rating: 4.3,
    liked: true,
    reviews: 300,
    description:
      'هنا موعدُ مختلف. حبيبان التقيا صدفة.. لا هما يعرفان بعضهما ولا هما غريبان عن بعضهما! مُرتبطان رغم كل تلك الغربة. "يحيى الطيب" خبير الآثار المصري الذي يحاول الهرب من حكايات الحبيبات القديمات، ومن لعنة كسرة القلب ومرارة الوحدة في نهاية كل علاقة، فيهرب إلى الصحراء بحثًا عن سرٍ قديمٍ.. . و"ياسمينا" الفتاة ليونانية التي جاءَت إلى مِصر هربًا من لعنةٍ تصيبها كلما اقتربت من الرجال. فحاولت اللجوء إلى صحراء مصر ومعها سرٌّ قديمٌ، ومفتاحٌ لكل ما يبحث عنه يحيى.  يلتقيان صدفة، أو هكذا ظنَّا، لتبدأ رموز كل الشفرات تُحل وتتشابك أيضًا، هكذا الأمرين معًا!',
  },
  {
    id: '14',
    name: 'Finding Freedom',
    image: require('../assets/images/books/5.jpg'),
    price: '200 EPG',
    rating: 4.2,
    liked: true,
    reviews: 205,
    description:
      'The biography describes the lives of Prince Harry, Duke of Sussex and Meghan, Duchess of Sussex over the course of their courtship, marriage, and eventual departure from the British royal family. The book goes into detail about their relationship, royal household, and personal lives.',
  },
  {
    id: '15',
    name: 'Reminders of him',
    image: require('../assets/images/books/18.jpg'),
    price: '200 EPG',
    rating: 4.6,
    liked: true,
    reviews: 310,
    description:
      'A troubled young mother yearns for a shot at redemption in this heartbreaking yet hopeful story from #1 New York Times bestselling author Colleen Hoover. After serving five years in prison for a tragic mistake, Kenna Rowan returns to the town where it all went wrong, hoping to reunite with her four-year-old daughter. But the bridges Kenna burned are proving impossible to rebuild. Everyone in her daughter’s life is determined to shut Kenna out, no matter how hard she works to prove herself. Everyone in her daughter’s life is determined to shut Kenna out, no matter how hard she works to prove herself. But if anyone were to discover how Ledger is slowly becoming an important part of Kenna’s life, both would risk losing the trust of everyone important to them. The two form a connection despite the pressure surrounding them, but as their romance grows, so does the risk. Kenna must find a way to absolve the mistakes of her past in order to build a future out of hope and healing.',
  },
  {
    id: '16',
    name: 'It starts with us',
    image: require('../assets/images/books/71.jpg'),
    price: '200 EPG',
    rating: 4.5,
    liked: true,
    reviews: 350,
    description:
      'Before It Ends with Us, it started with Atlas. Colleen Hoover tells fan favorite Atlas’s side of the story and shares what comes next in this long-anticipated sequel to the “glorious and touching” (USA TODAY) #1 New York Times bestseller It Ends with Us. Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date. But her excitement is quickly hampered by the knowledge that, though they are no longer married, Ryle is still very much a part of her life—and Atlas Corrigan is the one man he will hate being in his ex-wife and daughter’s life.  Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the “gripping, pulse-pounding” (Sarah Pekkanen, author of Perfect Neighbors) bestselling phenomenon It Ends with Us left off. Revealing more about Atlas’s past and following Lily as she embraces a second chance at true love while navigating a jealous ex-husband, it proves that “no one delivers an emotional read like Colleen Hoover” (Anna Todd, New York Times bestselling author).',
  },
  {
    id: '17',
    name: 'It ends with us',
    image: require('../assets/images/books/72.jpg'),
    price: '200 EPG',
    rating: 4.1,
    liked: true,
    reviews: 450,
    description:
      'Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants.  She’s come a long way from the small town in Maine where she grew up — she graduated from college, moved to Boston, and started her own business.  So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too good to be true. Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place. As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan — her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.',
  },
  {
    id: '18',
    name: 'Surrounded by idiots',
    image: require('../assets/images/books/24.jpg'),
    price: '550 EPG',
    rating: 4.1,
    liked: true,
    reviews: 450,
    description:
      'A runaway bestseller in Sweden that has sold more than a million copies worldwide, Surrounded by Idiots shares a groundbreaking new method of understanding the people around you that will change how you interact with everyone from your coworkers to your spouse.Author Thomas Erikson explains that there are four key behavior types that define how we interact with and perceive the people around us. Understanding someone’s pattern of behavior is the key to successful communication. Erikson breaks down the four kinds of behavior types—Reds who are dominant and commanding, Yellows who are social and optimistic, Greens who are laid back and friendly, and Blues who are analytical and precise—and explains how to identify and interact with each type of person. Instead of being bogged down with overly technical categorizations, the simple four color system allows you to speedily identify a friend or coworker and adjust how you speak and share with them.Surrounded by Idiots is full of practical information for interacting with people based on their color, including the strengths and weaknesses of all the profiles, how to give positive and negative feedback to each, and the best way to word an email when writing to someone with a different profile.',
  },
];

export default books;
