var cases = "https://thedextazlab.herokuapp.com/users/1/web_requests/79/covid19.json";
        var countries = "https://thedextazlab.herokuapp.com/users/1/web_requests/85/covid19.json";
        var cData = {"data": [{}]};
        var dTable = "";
        function getCountries() {
            var cDataTemp = {"data": [{}]};
            cDataTemp.data.length = 0;
            cData = cDataTemp;
            $.getJSON(countries, function(data) {
                for(i = 0; i < data.items[0].country.length; i++) {
                    cData.data.push({"country" : data.items[0].country[i], "total_cases" : data.items[0].total_cases[i], "new_cases": data.items[0].new_cases[i], "total_deaths": data.items[0].total_deaths[i], "new_deaths": data.items[0].new_deaths[i], "total_recovered": data.items[0].total_recovered[i], "active_cases": data.items[0].active_cases[i], "critical": data.items[0].critical[i], "cases_mil": data.items[0].cases_mil[i], "deaths_mil": data.items[0].deaths_mil[i], "first_case": data.items[0].first_case[i]});
                }
                
                return cData.data;
            
            });
        }
        function loadTable(isTrue) {
        if (isTrue == false) {

            if ( $.fn.DataTable.isDataTable('#countries') ) {
                dTable.clear().rows.add(cData.data).draw().columns.adjust();
            }

        }  else {
            if ( $.fn.DataTable.isDataTable('#countries') ) {
                dTable.destroy();
            }   
        dTable = $('#countries').DataTable( {
            
            fixedHeader: {
                header: false,
                footer: false
            },
            responsive: true,
            language: {
            search: "_INPUT_",
            searchPlaceholder: "Search..."
            },
            info: false,
            paging: false,
            deferRender: true,
            processing: true,
            searchDelay: 300,
            "createdRow": function( row, data, dataIndex){
                        if( data.new_cases !== ""){
                            $('td', row).eq(2).addClass('yellowClass');
                        }
                        if( data.new_deaths !== ""){
                            $('td', row).eq(4).addClass('redClass');
                        }
                    },
            
            order: [1,"desc"],
            "scrollCollapse": true,
            "scrollX": true,
            data: getCountries(),
            "columns" : [
                {"data" : "country"},
                {"data": "total_cases"},
                {"data": "new_cases"},
                {"data": "total_deaths"},
                {"data": "new_deaths"},
                {"data": "total_recovered"},
                {"data": "active_cases"},
                {"data": "critical"},
                {"data": "cases_mil"},
                {"data": "deaths_mil"},
                {"data": "first_case"}
            ],
            
            "footerCallback": function ( row, data, start, end, display ) {
                    var api = this.api();
        
                    // Remove the formatting to get integer data for summation
                    var intVal = function ( i ) {
                        return typeof i === 'string' ?
                            i.replace(/[\+,]/g, '')*1 :
                            typeof i === 'number' ?
                                i : 0;
                    };
                    // Get totals for each column
                    total_cases = api.column( 1 ).data().reduce( function (a, b) {return intVal(a) + intVal(b);}, 0 );
                    new_cases = api.column( 2 ).data().reduce( function (a, b) {return intVal(a) + intVal(b);}, 0 );
                    total_deaths = api.column( 3 ).data().reduce( function (a, b) {return intVal(a) + intVal(b);}, 0 );          
                    new_deaths = api.column( 4 ).data().reduce( function (a, b) {return intVal(a) + intVal(b);}, 0 );                
                    total_recovered = api.column( 5 ).data().reduce( function (a, b) {return intVal(a) + intVal(b);}, 0 );                 
                    active_cases = api.column( 6 ).data().reduce( function (a, b) {return intVal(a) + intVal(b);}, 0 );
                    critical = api.column( 7 ).data().reduce( function (a, b) {return intVal(a) + intVal(b);}, 0 );
                    // Update footer
                    $( api.column( 1 ).footer() ).html(total_cases.toLocaleString("en-US"));
                    $( api.column( 2 ).footer() ).html("+"+new_cases.toLocaleString("en-US")).addClass("yellowClass");
                    $( api.column( 3 ).footer() ).html(total_deaths.toLocaleString("en-US"));
                    $( api.column( 4 ).footer() ).html("+"+new_deaths.toLocaleString("en-US")).addClass("redClass");
                    $( api.column( 5 ).footer() ).html(total_recovered.toLocaleString("en-US"));
                    $( api.column( 6 ).footer() ).html(active_cases.toLocaleString("en-US"));
                    $( api.column( 7 ).footer() ).html(critical.toLocaleString("en-US"));
                }

            
            });
            }
        }
       
        function fetchDATA (){
            $('updates').removeClass("show").fadeOut(200, function() {
                $('.loader').removeClass("loaded").fadeIn(200);
            });
            loadTable(true);
            $.getJSON(cases, function(data) {
                    $('.cuCases').html(data.items[0].cases);
                    $('.cuDead').html(data.items[0].dead);
                    $('.cuRecovered').html(data.items[0].recovered);
                    $('.cuUpdated').html(data.items[0].updated);
                    $('.loader').addClass("loaded").fadeOut(200, function() {
                    $('updates').fadeIn(500).addClass("show");
                    });
                    

            });
           
        }
        function updateDATA() {
            loadTable(true);
            $.getJSON(cases, function(data) {
                    $('.cuCases').html(data.items[0].cases);
                    $('.cuDead').html(data.items[0].dead);
                    $('.cuRecovered').html(data.items[0].recovered);
                    $('.cuUpdated').html(data.items[0].updated);
                    $('.spinner').removeClass('fa-spin');
            });
                       
        }
        function switchLang(swahili) {
            if (swahili == true) {
                $('.CovidUpdates > li:nth-child(1) .cuLabel').html("JUMLA YA WAGONJWA:");
                $('.CovidUpdates > li:nth-child(2) .cuLabel').html("WALIOKUFA:");
                $('.CovidUpdates > li:nth-child(3) .cuLabel').html("WALIOPONA:");
                $('.cuTitle').html("Taarifa za COVID-19");
                $('.swahili').show();
                $('.english').hide();
                $('.lang').html('<span class="flag-icon-background flag-icon-us flag-icon-squared"></span>');
            } else {
                $('.CovidUpdates > li:nth-child(1) .cuLabel').html("TOTAL CASES:");
                $('.CovidUpdates > li:nth-child(2) .cuLabel').html("DEAD:");
                $('.CovidUpdates > li:nth-child(3) .cuLabel').html("RECOVERED:");
                $('.cuTitle').html("COVID-19 Updates");
                $('.swahili').hide();
                $('.english').show();
                $('.lang').html('<span class="flag-icon-background flag-icon-tz flag-icon-squared"></span>');
            }
        }
        function CountriesStyling(isTrue){
            $('#countries_filter').insertBefore('.masthead');
            if(isTrue == true) {
                $('.visible-links').removeClass('nav-fadeIn');
                $('.masthead').addClass('stickTop');
                $('#countries_filter').fadeIn();
            } else {
                $('.visible-links').addClass('nav-fadeIn');
                $('.masthead').removeClass('stickTop');
                $('#countries_filter').fadeOut();
            }
        }
        $(document).ready(function(){
            $('.settings').appendTo('#footer footer');
            fetchDATA();
            var dataTimer = setInterval(function() {
                $('.spinner').addClass('fa-spin');
                updateDATA();
            }, 60 * 1000);
            if(Cookies.get('site_lang') == "swahili") {
                switchLang(true);
            }
            $('.cuInstructions').fadeIn();
            $('.toggles').addClass('pageLoaded').delay(3000).addClass('show');
            $('.toggles, .scrollbutton').addClass('nohighlight');
            $('.lang').click(function(){
                if(Cookies.get('site_lang') == "swahili") {
                    Cookies.set('site_lang', 'english', { expires: 365 });
                    switchLang(false);
                } else {
                    Cookies.set('site_lang', 'swahili', { expires: 365 });
                    switchLang(true);
                }
            });
            $('.refresher').click(function() {
                $('.spinner').addClass('fa-spin');
                updateDATA();    
            });
            $('.darkswitch').click(function() {
                if($('.darkswitch-toggle').hasClass("fa-moon")) {
                    $('.darkswitch-toggle').removeClass("fa-moon").addClass("fa-sun");
                    $('body, #footer').addClass("darkmode");
                    Cookies.set('darkmode', 'true', { expires: 365 });
                } else {
                    $('.darkswitch-toggle').removeClass("fa-sun").addClass("fa-moon");
                    $('body, #footer').removeClass("darkmode");
                    Cookies.set('darkmode', 'false', { expires: 365 });
                }
            });
            $('.tableSwitch').click(function() {
                if($('.tableSwitch .set').hasClass("fa-th-list")) {
                    $('.tableSwitch .set').removeClass("fa-th-list").addClass("fa-th-large");
                } else {
                    $('.tableSwitch .set').removeClass("fa-th-large").addClass("fa-th-list");
                }
                if($('.countrydata').hasClass("show")) {
                    $('.cuInstructions').fadeIn(200);
                    CountriesStyling(false);
                    $('.countrydata').removeClass("show").fadeOut(200, function(){
                        $('updates').fadeIn(500).addClass("show"); 
                    });

                } else {
                    $('.cuInstructions').fadeOut(200);
                    CountriesStyling(true);
                    $('updates').removeClass("show").fadeOut(200, function() {
                    $('.countrydata').fadeIn(500, function(){
                        loadTable(false);
                    }).addClass("show");
                });
                }
            });
            $(window).scroll(function(){
                var fixed = $('.fixedHeader-floating').filter(function() {
                    return $(this).css('top').indexOf('0px') > -1
                })
                $('.fixedHeader-floating').removeClass("fixedMobile");
                $(fixed).addClass("fixedMobile");
                
            });
            $('body, #footer').css({"transition":"background 0.25s ease-in-out, color 0.25s ease-in-out"});
        });