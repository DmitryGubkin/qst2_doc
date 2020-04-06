
    // hide/unhide #navbar on scroll
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() 
    {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) 
        {
            document.getElementById("navbar").style.top = "0";
        } else 
        {
            document.getElementById("navbar").style.top = "-60px";
        }

        prevScrollpos = currentScrollPos;
    };

    // toggle sidebar visibility
    function fn_togg_sidebar ()
    {
        $('#sidebar, #content').toggleClass('hide');
        $('.collapse.in').toggleClass('in');
        $('.overlay').toggleClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    };

    // close sidebar screen on @media devices
    function closeSideBar()
    {
        var element = document.querySelector('.topbar');
        var style = getComputedStyle(element);

            if (style.justifyContent == "flex-end")
            { 
            if ($('#sidebar').hasClass('hide'))
            {
                fn_togg_sidebar();
            };
            
            };
    };
