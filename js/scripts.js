jQuery(document).ready(function($)
{

    $('.resume-btn').on('click', function(event)
    {
        event.preventDefault();
        $('.panel-resume').addClass('is-visible');
        $('.resume-btn').addClass('active');
        $('.github-btn').addClass('inactive');
        $('.linkedin-btn').addClass('inactive');
        $('.contact-btn').addClass('inactive');
    });

    $('.rpanel').on('click', function(event)
    {
        if($(event.target).is('.rpanel') || $(event.target).is('.rpanel-close')) 
        { 
            $('.rpanel').removeClass('is-visible');
            $('.links-item a').removeClass('active inactive');
            event.preventDefault();     
        }
    });

});
