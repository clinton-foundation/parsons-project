google.setOnLoadCallback(drawChart);

   function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
       [ 'Alabama', '2005', 0.218051904113033 ],
       [ 'Alabama', '2006', 0.216853016717676 ],
       [ 'Alabama', '2007', 0.22634694021157 ],
       [ 'Alabama', '2008', 0.186955214908326 ],
       [ 'Alabama', '2009', 0.200426062951431 ],
       [ 'Alabama', '2010', 0.194755086292427 ],
       [ 'Alabama', '2011', 0.162657935608446 ],
       [ 'Alabama', '2012', 0.207645862917973 ],
       [ 'Alabama', '2013', 0.246509064184223 ],
       [ 'Alabama', '2014', 0.26410494543766 ],
       [ 'Alaska', '2005', 0.0182356574614102 ],
       [ 'Alaska', '2006', 0.0169176112332939 ],
       [ 'Alaska', '2007', 0.0129006028099858 ],
       [ 'Alaska', '2008', 0.0147279831680192 ],
       [ 'Alaska', '2009', 0.0122902774451349 ],
       [ 'Alaska', '2010', 0.0119425288764224 ],
       [ 'Alaska', '2011', 0.0183646056332116 ],
       [ 'Alaska', '2012', 0.0120041273765618 ],
       [ 'Alaska', '2013', 0.0364915074309979 ],
       [ 'Alaska', '2014', 0.0200739106880272 ],
       [ 'Arizona', '2005', 0.169475216577532 ],
       [ 'Arizona', '2006', 0.191604763589199 ],
       [ 'Arizona', '2007', 0.207973354391287 ],
       [ 'Arizona', '2008', 0.162007814848212 ],
       [ 'Arizona', '2009', 0.171118478274571 ],
       [ 'Arizona', '2010', 0.166276748202496 ],
       [ 'Arizona', '2011', 0.212504722327163 ],
       [ 'Arizona', '2012', 0.274051673937252 ],
       [ 'Arizona', '2013', 0.241915727584517 ],
       [ 'Arizona', '2014', 0.257091169414132 ],
       [ 'Arkansas', '2005', 10.365225299608 ],
       [ 'Arkansas', '2006', 9.53794415137673 ],
       [ 'Arkansas', '2007', 10.1291233063072 ],
       [ 'Arkansas', '2008', 10.9621280432822 ],
       [ 'Arkansas', '2009', 11.0136642674364 ],
       [ 'Arkansas', '2010', 10.7020369667202 ],
       [ 'Arkansas', '2011', 11.0583784577929 ],
       [ 'Arkansas', '2012', 10.2014650143539 ],
       [ 'Arkansas', '2013', 7.97173566878981 ],
       [ 'Arkansas', '2014', 7.98312824084823 ],
       [ 'California', '2005', 1.0442435849285 ],
       [ 'California', '2006', 1.15603676760841 ],
       [ 'California', '2007', 1.13583943831557 ],
       [ 'California', '2008', 1.09467989179441 ],
       [ 'California', '2009', 1.00465139731 ],
       [ 'California', '2010', 0.976225180975245 ],
       [ 'California', '2011', 1.03261553960458 ],
       [ 'California', '2012', 1.09671750967992 ],
       [ 'California', '2013', 1.25857422831945 ],
       [ 'California', '2014', 1.29633929262441 ],
       [ 'Colorado', '2005', 0.226820539402988 ],
       [ 'Colorado', '2006', 0.226337132106038 ],
       [ 'Colorado', '2007', 0.218137465696124 ],
       [ 'Colorado', '2008', 0.171325518485122 ],
       [ 'Colorado', '2009', 0.218073640821369 ],
       [ 'Colorado', '2010', 0.211903332884213 ],
       [ 'Colorado', '2011', 0.235066952105109 ],
       [ 'Colorado', '2012', 0.277627371453674 ],
       [ 'Colorado', '2013', 0.279427976482117 ],
       [ 'Colorado', '2014', 0.32021515362588 ],
       [ 'Connecticut', '2005', 0.0741066079814757 ],
       [ 'Connecticut', '2006', 0.0598524579238502 ],
       [ 'Connecticut', '2007', 0.0633302319762942 ],
       [ 'Connecticut', '2008', 0.0661256387135558 ],
       [ 'Connecticut', '2009', 0.0564092221199783 ],
       [ 'Connecticut', '2010', 0.0548131453558874 ],
       [ 'Connecticut', '2011', 0.0598161440624606 ],
       [ 'Connecticut', '2012', 0.0503151721953761 ],
       [ 'Connecticut', '2013', 0.0814041319614568 ],
       [ 'Connecticut', '2014', 0.0933557774166086 ],
       [ 'Delaware', '2005', 0.0242883437677507 ],
       [ 'Delaware', '2006', 0.0189682307767234 ],
       [ 'Delaware', '2007', 0.0209146136464922 ],
       [ 'Delaware', '2008', 0.0117222723174031 ],
       [ 'Delaware', '2009', 0.0211140663801036 ],
       [ 'Delaware', '2010', 0.0205166521723154 ],
       [ 'Delaware', '2011', 0.0236116358141292 ],
       [ 'Delaware', '2012', 0.025796103511335 ],
       [ 'Delaware', '2013', 0.0247529805650825 ],
       [ 'Delaware', '2014', 0.0261202693289993 ],
       [ 'District of Columbia', '2005', 0.065337972691521 ],
       [ 'District of Columbia', '2006', 0.0670296263258537 ],
       [ 'District of Columbia', '2007', 0.053361584350396 ],
       [ 'District of Columbia', '2008', 0.062819356777878 ],
       [ 'District of Columbia', '2009', 0.0564092221199783 ],
       [ 'District of Columbia', '2010', 0.0548131453558874 ],
       [ 'District of Columbia', '2011', 0.0907736221298745 ],
       [ 'District of Columbia', '2012', 0.0615530786755616 ],
       [ 'District of Columbia', '2013', 0.141117507757635 ],
       [ 'District of Columbia', '2014', 0.122620153238913 ],
       [ 'Florida', '2005', 0.522160591735445 ],
       [ 'Florida', '2006', 0.718357658807667 ],
       [ 'Florida', '2007', 0.783613888867171 ],
       [ 'Florida', '2008', 1.09858731590021 ],
       [ 'Florida', '2009', 1.10927632325321 ],
       [ 'Florida', '2010', 1.0778897857694 ],
       [ 'Florida', '2011', 0.859201192125257 ],
       [ 'Florida', '2012', 0.848717346219466 ],
       [ 'Florida', '2013', 0.784439817083129 ],
       [ 'Florida', '2014', 0.907437504837087 ],
       [ 'Georgia', '2005', 0.333751330815002 ],
       [ 'Georgia', '2006', 0.335404459072197 ],
       [ 'Georgia', '2007', 0.304727875466181 ],
       [ 'Georgia', '2008', 0.204688908926961 ],
       [ 'Georgia', '2009', 0.216182828906733 ],
       [ 'Georgia', '2010', 0.210066020749378 ],
       [ 'Georgia', '2011', 0.271796163371532 ],
       [ 'Georgia', '2012', 0.2681773137317 ],
       [ 'Georgia', '2013', 0.359556181610322 ],
       [ 'Georgia', '2014', 0.369795294481851 ],
       [ 'Hawaii', '2005', 0.0168388836984086 ],
       [ 'Hawaii', '2006', 0.0185837396123304 ],
       [ 'Hawaii', '2007', 0.0201327589307355 ],
       [ 'Hawaii', '2008', 0.018034265103697 ],
       [ 'Hawaii', '2009', 0.013235683402453 ],
       [ 'Hawaii', '2010', 0.0128611849438395 ],
       [ 'Hawaii', '2011', 0.0233492843050833 ],
       [ 'Hawaii', '2012', 0.0209433711676185 ],
       [ 'Hawaii', '2013', 0.0255185366650335 ],
       [ 'Hawaii', '2014', 0.0207994737249439 ],
       [ 'Idaho', '2005', 0.0217275918689143 ],
       [ 'Idaho', '2006', 0.0224286512562608 ],
       [ 'Idaho', '2007', 0.0203282226096747 ],
       [ 'Idaho', '2008', 0.0192365494439435 ],
       [ 'Idaho', '2009', 0.0236351489329518 ],
       [ 'Idaho', '2010', 0.0229664016854277 ],
       [ 'Idaho', '2011', 0.0254480963774504 ],
       [ 'Idaho', '2012', 0.0224758129603711 ],
       [ 'Idaho', '2013', 0.0301118732647395 ],
       [ 'Idaho', '2014', 0.0367618605371101 ],
       [ 'Illinois', '2005', 0.733927013914971 ],
       [ 'Illinois', '2006', 0.763086797598725 ],
       [ 'Illinois', '2007', 0.729470449801018 ],
       [ 'Illinois', '2008', 0.621280432822363 ],
       [ 'Illinois', '2009', 0.642876050976289 ],
       [ 'Illinois', '2010', 0.624686125843632 ],
       [ 'Illinois', '2011', 0.553561684086807 ],
       [ 'Illinois', '2012', 0.585137357866024 ],
       [ 'Illinois', '2013', 0.740292748652621 ],
       [ 'Illinois', '2014', 0.867289683461032 ],
       [ 'Indiana', '2005', 0.266473394563757 ],
       [ 'Indiana', '2006', 0.229797552585575 ],
       [ 'Indiana', '2007', 0.231624459542928 ],
       [ 'Indiana', '2008', 0.163210099188458 ],
       [ 'Indiana', '2009', 0.18624497359166 ],
       [ 'Indiana', '2010', 0.18097524528117 ],
       [ 'Indiana', '2011', 0.197550686311548 ],
       [ 'Indiana', '2012', 0.200239060919669 ],
       [ 'Indiana', '2013', 0.233749795851707 ],
       [ 'Indiana', '2014', 0.318280318860769 ],
       [ 'Iowa', '2005', 0.235744371777721 ],
       [ 'Iowa', '2006', 0.222748547905036 ],
       [ 'Iowa', '2007', 0.189013377534187 ],
       [ 'Iowa', '2008', 0.143372407574391 ],
       [ 'Iowa', '2009', 0.174269831465631 ],
       [ 'Iowa', '2010', 0.169338935093887 ],
       [ 'Iowa', '2011', 0.179448432187382 ],
       [ 'Iowa', '2012', 0.175464585270169 ],
       [ 'Iowa', '2013', 0.281469459415319 ],
       [ 'Iowa', '2014', 0.213557387199133 ],
       [ 'Kansas', '2005', 0.324905096982658 ],
       [ 'Kansas', '2006', 0.3702649913105 ],
       [ 'Kansas', '2007', 0.369426353195049 ],
       [ 'Kansas', '2008', 0.290952810339645 ],
       [ 'Kansas', '2009', 0.313244507191388 ],
       [ 'Kansas', '2010', 0.304381377004201 ],
       [ 'Kansas', '2011', 0.282290223733367 ],
       [ 'Kansas', '2012', 0.385153703911813 ],
       [ 'Kansas', '2013', 0.439174016005226 ],
       [ 'Kansas', '2014', 0.410184970203545 ],
       [ 'Kentucky', '2005', 0.179951019800044 ],
       [ 'Kentucky', '2006', 0.178532063999836 ],
       [ 'Kentucky', '2007', 0.194290896865544 ],
       [ 'Kentucky', '2008', 0.1487826871055 ],
       [ 'Kentucky', '2009', 0.15851306551033 ],
       [ 'Kentucky', '2010', 0.154028000636935 ],
       [ 'Kentucky', '2011', 0.232181085505604 ],
       [ 'Kentucky', '2012', 0.167546969340948 ],
       [ 'Kentucky', '2013', 0.200830883553814 ],
       [ 'Kentucky', '2014', 0.216943348038078 ],
       [ 'Louisiana', '2005', 0.684341545328413 ],
       [ 'Louisiana', '2006', 0.587630662914033 ],
       [ 'Louisiana', '2007', 0.55746241233454 ],
       [ 'Louisiana', '2008', 0.714156898106402 ],
       [ 'Louisiana', '2009', 0.534154365884711 ],
       [ 'Louisiana', '2010', 0.519040678090665 ],
       [ 'Louisiana', '2011', 0.478791504008731 ],
       [ 'Louisiana', '2012', 0.474290734856921 ],
       [ 'Louisiana', '2013', 0.662461211824269 ],
       [ 'Louisiana', '2014', 0.518777571395403 ],
       [ 'Maine', '2005', 0.0241331466829727 ],
       [ 'Maine', '2006', 0.0199935405484382 ],
       [ 'Maine', '2007', 0.0216964683622489 ],
       [ 'Maine', '2008', 0.0120228434024647 ],
       [ 'Maine', '2009', 0.0122902774451349 ],
       [ 'Maine', '2010', 0.0119425288764224 ],
       [ 'Maine', '2011', 0.0388280233387902 ],
       [ 'Maine', '2012', 0.0273285453040875 ],
       [ 'Maine', '2013', 0.0237322390984811 ],
       [ 'Maine', '2014', 0.0316829192786936 ],
       [ 'Maryland', '2005', 0.189728436141056 ],
       [ 'Maryland', '2006', 0.158154032287005 ],
       [ 'Maryland', '2007', 0.167316909171938 ],
       [ 'Maryland', '2008', 0.190862639014127 ],
       [ 'Maryland', '2009', 0.158197930191224 ],
       [ 'Maryland', '2010', 0.153721781947796 ],
       [ 'Maryland', '2011', 0.191778953112538 ],
       [ 'Maryland', '2012', 0.173421329546499 ],
       [ 'Maryland', '2013', 0.257482034950188 ],
       [ 'Maryland', '2014', 0.238468384799938 ],
       [ 'Massachusetts', '2005', 0.123847273652812 ],
       [ 'Massachusetts', '2006', 0.117782460025735 ],
       [ 'Massachusetts', '2007', 0.117669134721386 ],
       [ 'Massachusetts', '2008', 0.114217012323414 ],
       [ 'Massachusetts', '2009', 0.119751421260289 ],
       [ 'Massachusetts', '2010', 0.116363101872834 ],
       [ 'Massachusetts', '2011', 0.147179196574739 ],
       [ 'Massachusetts', '2012', 0.117742611076489 ],
       [ 'Massachusetts', '2013', 0.211293483586477 ],
       [ 'Massachusetts', '2014', 0.153093800789413 ],
       [ 'Michigan', '2005', 0.312489330200422 ],
       [ 'Michigan', '2006', 0.309002732450542 ],
       [ 'Michigan', '2007', 0.299841283492701 ],
       [ 'Michigan', '2008', 0.225127742711151 ],
       [ 'Michigan', '2009', 0.217128234864051 ],
       [ 'Michigan', '2010', 0.210984676816796 ],
       [ 'Michigan', '2011', 0.301704235402762 ],
       [ 'Michigan', '2012', 0.26204754656069 ],
       [ 'Michigan', '2013', 0.22890127388535 ],
       [ 'Michigan', '2014', 0.241612491293244 ],
       [ 'Minnesota', '2005', 0.337864053561618 ],
       [ 'Minnesota', '2006', 0.276192819755669 ],
       [ 'Minnesota', '2007', 0.244134134995035 ],
       [ 'Minnesota', '2008', 0.226330027051398 ],
       [ 'Minnesota', '2009', 0.283936922514528 ],
       [ 'Minnesota', '2010', 0.275903038914271 ],
       [ 'Minnesota', '2011', 0.261039751500651 ],
       [ 'Minnesota', '2012', 0.254385337596927 ],
       [ 'Minnesota', '2013', 0.365425445043279 ],
       [ 'Minnesota', '2014', 0.348995820756907 ],
       [ 'Mississippi', '2005', 0.39699414286202 ],
       [ 'Mississippi', '2006', 0.458441631677971 ],
       [ 'Mississippi', '2007', 0.4335384398871 ],
       [ 'Mississippi', '2008', 0.466185752930568 ],
       [ 'Mississippi', '2009', 0.603799271407142 ],
       [ 'Mississippi', '2010', 0.586715008390392 ],
       [ 'Mississippi', '2011', 0.343418125341057 ],
       [ 'Mississippi', '2012', 0.309042428205102 ],
       [ 'Mississippi', '2013', 0.440449942838478 ],
       [ 'Mississippi', '2014', 0.289499651729742 ],
       [ 'Missouri', '2005', 0.897970332525274 ],
       [ 'Missouri', '2006', 1.05773519324526 ],
       [ 'Missouri', '2007', 1.05882674881354 ],
       [ 'Missouri', '2008', 0.880372708145476 ],
       [ 'Missouri', '2009', 0.841096166693978 ],
       [ 'Missouri', '2010', 0.817297681312086 ],
       [ 'Missouri', '2011', 0.775248709230575 ],
       [ 'Missouri', '2012', 0.998385827978301 ],
       [ 'Missouri', '2013', 1.1802323207578 ],
       [ 'Missouri', '2014', 1.14880814178469 ],
       [ 'Montana', '2005', 0.019244438512467 ],
       [ 'Montana', '2006', 0.0234539610279756 ],
       [ 'Montana', '2007', 0.0220873957201273 ],
       [ 'Montana', '2008', 0.0117222723174031 ],
       [ 'Montana', '2009', 0.0157567659553012 ],
       [ 'Montana', '2010', 0.0153109344569518 ],
       [ 'Montana', '2011', 0.0238739873231751 ],
       [ 'Montana', '2012', 0.021454185098536 ],
       [ 'Montana', '2013', 0.0265392781316348 ],
       [ 'Montana', '2014', 0.0498219952016098 ],
       [ 'Nebraska', '2005', 0.110112331649962 ],
       [ 'Nebraska', '2006', 0.0986860655275475 ],
       [ 'Nebraska', '2007', 0.100859258332617 ],
       [ 'Nebraska', '2008', 0.136759843703036 ],
       [ 'Nebraska', '2009', 0.126684398280622 ],
       [ 'Nebraska', '2010', 0.123099913033892 ],
       [ 'Nebraska', '2011', 0.120156991143013 ],
       [ 'Nebraska', '2012', 0.135110284727685 ],
       [ 'Nebraska', '2013', 0.145966029723992 ],
       [ 'Nebraska', '2014', 0.136647705285969 ],
       [ 'Nevada', '2005', 0.0625444251655177 ],
       [ 'Nevada', '2006', 0.0644663518965667 ],
       [ 'Nevada', '2007', 0.0920633927803536 ],
       [ 'Nevada', '2008', 0.0751427712654043 ],
       [ 'Nevada', '2009', 0.0724811233943855 ],
       [ 'Nevada', '2010', 0.0704302985019782 ],
       [ 'Nevada', '2011', 0.104153549091214 ],
       [ 'Nevada', '2012', 0.0909248797033193 ],
       [ 'Nevada', '2013', 0.0722174587620448 ],
       [ 'Nevada', '2014', 0.0766678275675257 ],
       [ 'New Hampshire', '2005', 0.0213395991569694 ],
       [ 'New Hampshire', '2006', 0.0265298903431199 ],
       [ 'New Hampshire', '2007', 0.0201327589307355 ],
       [ 'New Hampshire', '2008', 0.018034265103697 ],
       [ 'New Hampshire', '2009', 0.0226897429756337 ],
       [ 'New Hampshire', '2010', 0.0220477456180106 ],
       [ 'New Hampshire', '2011', 0.021775175250808 ],
       [ 'New Hampshire', '2012', 0.0255406965458762 ],
       [ 'New Hampshire', '2013', 0.0334292830311939 ],
       [ 'New Hampshire', '2014', 0.0331340453525269 ],
       [ 'New Jersey', '2005', 0.129123974535262 ],
       [ 'New Jersey', '2006', 0.123934318656024 ],
       [ 'New Jersey', '2007', 0.120992017263352 ],
       [ 'New Jersey', '2008', 0.121130147279832 ],
       [ 'New Jersey', '2009', 0.114078985516381 ],
       [ 'New Jersey', '2010', 0.110851165468331 ],
       [ 'New Jersey', '2011', 0.133799269613399 ],
       [ 'New Jersey', '2012', 0.157330690722597 ],
       [ 'New Jersey', '2013', 0.138565654091132 ],
       [ 'New Jersey', '2014', 0.135196579212135 ],
       [ 'New Mexico', '2005', 0.0923422654428859 ],
       [ 'New Mexico', '2006', 0.0921497157328658 ],
       [ 'New Mexico', '2007', 0.0709533154549222 ],
       [ 'New Mexico', '2008', 0.0997896002404569 ],
       [ 'New Mexico', '2009', 0.0661784170122651 ],
       [ 'New Mexico', '2010', 0.0643059247191975 ],
       [ 'New Mexico', '2011', 0.0750325315871217 ],
       [ 'New Mexico', '2012', 0.0860721473596028 ],
       [ 'New Mexico', '2013', 0.102074146660134 ],
       [ 'New Mexico', '2014', 0.08440716662797 ],
       [ 'New York', '2005', 0.313110118539533 ],
       [ 'New York', '2006', 0.289521846787961 ],
       [ 'New York', '2007', 0.293195518408769 ],
       [ 'New York', '2008', 0.306883077847911 ],
       [ 'New York', '2009', 0.245175278264487 ],
       [ 'New York', '2010', 0.23823814015017 ],
       [ 'New York', '2011', 0.300392477857533 ],
       [ 'New York', '2012', 0.340712891921989 ],
       [ 'New York', '2013', 0.439174016005226 ],
       [ 'New York', '2014', 0.402929339834378 ],
       [ 'North Carolina', '2005', 0.259877518460693 ],
       [ 'North Carolina', '2006', 0.277218129527383 ],
       [ 'North Carolina', '2007', 0.299841283492701 ],
       [ 'North Carolina', '2008', 0.214006612563871 ],
       [ 'North Carolina', '2009', 0.2354060833722 ],
       [ 'North Carolina', '2010', 0.22874536078686 ],
       [ 'North Carolina', '2011', 0.259203290937329 ],
       [ 'North Carolina', '2012', 0.260770511733396 ],
       [ 'North Carolina', '2013', 0.287338722848277 ],
       [ 'North Carolina', '2014', 0.317071047132575 ],
       [ 'North Dakota', '2005', 0.0241331466829727 ],
       [ 'North Dakota', '2006', 0.0193527219411165 ],
       [ 'North Dakota', '2007', 0.0140733848836209 ],
       [ 'North Dakota', '2008', 0.0252479711451758 ],
       [ 'North Dakota', '2009', 0.013550818721559 ],
       [ 'North Dakota', '2010', 0.0131674036329785 ],
       [ 'North Dakota', '2011', 0.0144293329975234 ],
       [ 'North Dakota', '2012', 0.0209433711676185 ],
       [ 'North Dakota', '2013', 0.0387881757308509 ],
       [ 'North Dakota', '2014', 0.0278132497484715 ],
       [ 'Ohio', '2005', 0.30729022786036 ],
       [ 'Ohio', '2006', 0.284523461650851 ],
       [ 'Ohio', '2007', 0.270717195330764 ],
       [ 'Ohio', '2008', 0.232642019837692 ],
       [ 'Ohio', '2009', 0.25525960847588 ],
       [ 'Ohio', '2010', 0.248037138202619 ],
       [ 'Ohio', '2011', 0.277043193552449 ],
       [ 'Ohio', '2012', 0.287588243106566 ],
       [ 'Ohio', '2013', 0.331996162012086 ],
       [ 'Ohio', '2014', 0.352623635941491 ],
       [ 'Oklahoma', '2005', 0.624745864773676 ],
       [ 'Oklahoma', '2006', 0.68452243634108 ],
       [ 'Oklahoma', '2007', 0.561371685913324 ],
       [ 'Oklahoma', '2008', 0.496844003606853 ],
       [ 'Oklahoma', '2009', 0.50169542801679 ],
       [ 'Oklahoma', '2010', 0.487500153109345 ],
       [ 'Oklahoma', '2011', 0.573238047265248 ],
       [ 'Oklahoma', '2012', 0.590245497175199 ],
       [ 'Oklahoma', '2013', 0.59483708966193 ],
       [ 'Oklahoma', '2014', 0.630997987771844 ],
       [ 'Oregon', '2005', 0.0721666444217512 ],
       [ 'Oregon', '2006', 0.0816402905727893 ],
       [ 'Oregon', '2007', 0.0912815380645968 ],
       [ 'Oregon', '2008', 0.0772467688608356 ],
       [ 'Oregon', '2009', 0.0756324765854458 ],
       [ 'Oregon', '2010', 0.0734924853933685 ],
       [ 'Oregon', '2011', 0.0648008227343324 ],
       [ 'Oregon', '2012', 0.106249297630845 ],
       [ 'Oregon', '2013', 0.109474522292994 ],
       [ 'Oregon', '2014', 0.120927172819441 ],
       [ 'Pennsylvania', '2005', 0.210059254246968 ],
       [ 'Pennsylvania', '2006', 0.187375360780876 ],
       [ 'Pennsylvania', '2007', 0.258402983557595 ],
       [ 'Pennsylvania', '2008', 0.253080853621882 ],
       [ 'Pennsylvania', '2009', 0.214607152311202 ],
       [ 'Pennsylvania', '2010', 0.208534927303683 ],
       [ 'Pennsylvania', '2011', 0.214865885908576 ],
       [ 'Pennsylvania', '2012', 0.215818885812654 ],
       [ 'Pennsylvania', '2013', 0.268199820349502 ],
       [ 'Pennsylvania', '2014', 0.289741506075381 ],
       [ 'Puerto Rico', '2005', 0.00473351108572777 ],
       [ 'Puerto Rico', '2006', 0.00307592931514434 ],
       [ 'Puerto Rico', '2007', 0.00645030140499292 ],
       [ 'Puerto Rico', '2008', 0.00541027953110911 ],
       [ 'Puerto Rico', '2009', 0.00378162382927229 ],
       [ 'Puerto Rico', '2010', 0.00367462426966843 ],
       [ 'Puerto Rico', '2011', 0.00419762414473408 ],
       [ 'Puerto Rico', '2012', 0.00638517413646905 ],
       [ 'Puerto Rico', '2013', 0.0058692634329577 ],
       [ 'Puerto Rico', '2014', 0.00773933906044424 ],
       [ 'Rhode Island', '2005', 0.015442109935407 ],
       [ 'Rhode Island', '2006', 0.0140980093610782 ],
       [ 'Rhode Island', '2007', 0.0125096754521075 ],
       [ 'Rhode Island', '2008', 0.0129245566576495 ],
       [ 'Rhode Island', '2009', 0.0107146008496048 ],
       [ 'Rhode Island', '2010', 0.0104114354307272 ],
       [ 'Rhode Island', '2011', 0.0215128237417622 ],
       [ 'Rhode Island', '2012', 0.0314150567514277 ],
       [ 'Rhode Island', '2013', 0.0413400293973542 ],
       [ 'Rhode Island', '2014', 0.0178972215772773 ],
       [ 'South Carolina', '2005', 0.0962997911047239 ],
       [ 'South Carolina', '2006', 0.0945848264406884 ],
       [ 'South Carolina', '2007', 0.106918632379731 ],
       [ 'South Carolina', '2008', 0.0859633303276225 ],
       [ 'South Carolina', '2009', 0.0964314076464434 ],
       [ 'South Carolina', '2010', 0.0937029188765449 ],
       [ 'South Carolina', '2011', 0.101530034000756 ],
       [ 'South Carolina', '2012', 0.114933134456443 ],
       [ 'South Carolina', '2013', 0.157194185856606 ],
       [ 'South Carolina', '2014', 0.132294327064469 ],
       [ 'South Dakota', '2005', 0.0401960449574915 ],
       [ 'South Dakota', '2006', 0.0415250457544486 ],
       [ 'South Dakota', '2007', 0.0439793277613154 ],
       [ 'South Dakota', '2008', 0.0522993688007214 ],
       [ 'South Dakota', '2009', 0.0523124629716 ],
       [ 'South Dakota', '2010', 0.0508323023970799 ],
       [ 'South Dakota', '2011', 0.0425009444654326 ],
       [ 'South Dakota', '2012', 0.0523584279190462 ],
       [ 'South Dakota', '2013', 0.0589478196962273 ],
       [ 'South Dakota', '2014', 0.0771515362588035 ],
       [ 'Tennessee', '2005', 1.44566084470669 ],
       [ 'Tennessee', '2006', 1.67932924234734 ],
       [ 'Tennessee', '2007', 1.52207566789939 ],
       [ 'Tennessee', '2008', 1.44153892395552 ],
       [ 'Tennessee', '2009', 1.40014622278807 ],
       [ 'Tennessee', '2010', 1.36052963584473 ],
       [ 'Tennessee', '2011', 1.10633631364648 ],
       [ 'Tennessee', '2012', 1.17308419235209 ],
       [ 'Tennessee', '2013', 1.15803119385922 ],
       [ 'Tennessee', '2014', 0.934525191548642 ],
       [ 'Texas', '2005', 2.52358219703201 ],
       [ 'Texas', '2006', 2.76385065337865 ],
       [ 'Texas', '2007', 2.48981634232727 ],
       [ 'Texas', '2008', 2.35437330928765 ],
       [ 'Texas', '2009', 2.43189925754119 ],
       [ 'Texas', '2010', 2.36308962408594 ],
       [ 'Texas', '2011', 2.71481341560677 ],
       [ 'Texas', '2012', 2.84523359521061 ],
       [ 'Texas', '2013', 3.22911562959334 ],
       [ 'Texas', '2014', 3.45851714263602 ],
       [ 'Utah', '2005', 0.0436879793649956 ],
       [ 'Utah', '2006', 0.0493430327637738 ],
       [ 'Utah', '2007', 0.0506250928452475 ],
       [ 'Utah', '2008', 0.0369702434625789 ],
       [ 'Utah', '2009', 0.0412827268028892 ],
       [ 'Utah', '2010', 0.0401146482772137 ],
       [ 'Utah', '2011', 0.0474856231373043 ],
       [ 'Utah', '2012', 0.0888816239796492 ],
       [ 'Utah', '2013', 0.064051527029234 ],
       [ 'Utah', '2014', 0.059738023372804 ],
       [ 'Vermont', '2005', 0.0206412122754686 ],
       [ 'Vermont', '2006', 0.0147388279684 ],
       [ 'Vermont', '2007', 0.0177871947834653 ],
       [ 'Vermont', '2008', 0.0144274120829576 ],
       [ 'Vermont', '2009', 0.00756324765854458 ],
       [ 'Vermont', '2010', 0.00734924853933685 ],
       [ 'Vermont', '2011', 0.00891995130755992 ],
       [ 'Vermont', '2012', 0.016090638823902 ],
       [ 'Vermont', '2013', 0.0244977951984321 ],
       [ 'Vermont', '2014', 0.0154786781208885 ],
       [ 'Virginia', '2005', 0.26926694208976 ],
       [ 'Virginia', '2006', 0.280037731399599 ],
       [ 'Virginia', '2007', 0.254102782620933 ],
       [ 'Virginia', '2008', 0.248872858431019 ],
       [ 'Virginia', '2009', 0.213661746353884 ],
       [ 'Virginia', '2010', 0.207616271236266 ],
       [ 'Virginia', '2011', 0.237428115686521 ],
       [ 'Virginia', '2012', 0.242381210220365 ],
       [ 'Virginia', '2013', 0.328678752245631 ],
       [ 'Virginia', '2014', 0.385032118257101 ],
       [ 'Washington', '2005', 0.146195653860838 ],
       [ 'Washington', '2006', 0.167381820232438 ],
       [ 'Washington', '2007', 0.176503702082079 ],
       [ 'Washington', '2008', 0.134054703937481 ],
       [ 'Washington', '2009', 0.147168194022513 ],
       [ 'Washington', '2010', 0.14300412782793 ],
       [ 'Washington', '2011', 0.182334298786887 ],
       [ 'Washington', '2012', 0.24953260525321 ],
       [ 'Washington', '2013', 0.208741629919974 ],
       [ 'Washington', '2014', 0.185985991796301 ],
       [ 'West Virginia', '2005', 0.0316602052947037 ],
       [ 'West Virginia', '2006', 0.0417813731973773 ],
       [ 'West Virginia', '2007', 0.0349879985301131 ],
       [ 'West Virginia', '2008', 0.0294559663360385 ],
       [ 'West Virginia', '2009', 0.0280470434004361 ],
       [ 'West Virginia', '2010', 0.0272534633333742 ],
       [ 'West Virginia', '2011', 0.032793938630735 ],
       [ 'West Virginia', '2012', 0.025796103511335 ],
       [ 'West Virginia', '2013', 0.0477196635636126 ],
       [ 'West Virginia', '2014', 0.0290225214766659 ],
       [ 'Wisconsin', '2005', 0.291537723755397 ],
       [ 'Wisconsin', '2006', 0.243639234503724 ],
       [ 'Wisconsin', '2007', 0.239247543021556 ],
       [ 'Wisconsin', '2008', 0.229335737902014 ],
       [ 'Wisconsin', '2009', 0.231939594862034 ],
       [ 'Wisconsin', '2010', 0.22537695520633 ],
       [ 'Wisconsin', '2011', 0.246085715485035 ],
       [ 'Wisconsin', '2012', 0.290653126692071 ],
       [ 'Wisconsin', '2013', 0.317195410746366 ],
       [ 'Wisconsin', '2014', 0.30957356241777 ],
       [ 'Wyoming', '2005', 0.0138125405452384 ],
       [ 'Wyoming', '2006', 0.0153796465757217 ],
       [ 'Wyoming', '2007', 0.0146597759204385 ],
       [ 'Wyoming', '2008', 0.014126840997896 ],
       [ 'Wyoming', '2009', 0.00976919489228675 ],
       [ 'Wyoming', '2010', 0.0094927793633101 ],
       [ 'Wyoming', '2011', 0.0139046299794316 ],
       [ 'Wyoming', '2012', 0.0194109293748659 ],
       [ 'Wyoming', '2013', 0.0224563122652295 ],
       [ 'Wyoming', '2014', 0.0130601346644997 ]
    ]);
    
    // Set chart options
    var options = {
      width: 722,
      height: 2000,
      sankey: {
        link: {color: {fill: '#8ECAE9;' } },  
        node: { label: { fontName: 'Open Sans 400',
                         fontSize: 14,
                         color: '#fff'} } },
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chart.draw(data, options);
   }

