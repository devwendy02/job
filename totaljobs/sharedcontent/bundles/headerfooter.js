function NotificationItem(t, i, e, o, n, a) {
    this.notificationType = t, this.link = i, this.title = e, this.subtitle = o, this.body = n, this.dateCreated = a, this.isExpired = function() {
        if ("undefined" != typeof this.dateCreated && null !== this.dateCreated) {
            var t = ((new Date).getTime() - this.dateCreated.getTime()) / 864e5;
            if (t > this.lifeTimeInDays()) return !0
        }
        return !1
    }, this.lifeTimeInDays = function() {
        return this.notificationType === NotificationType.JBEUPDATE ? 7 : 30
    }, this.addNotificationQueryStringToUrl = function(t, i) {
        if (this.notificationType === NotificationType.JBEUPDATE) return this.link;
        var e = "unknown",
            o = "src_notifications";
        "undefined" != typeof analytics && null !== analytics && ("undefined" != typeof analytics.RecommendedJobsOrigin && null !== analytics.RecommendedJobsOrigin ? e = analytics.RecommendedJobsOrigin : "undefined" != typeof analytics.PageName && null !== analytics.PageName && (e = analytics.PageName));
        var n = i + "|" + e,
            a = "?";
        return this.link.indexOf("?") > -1 && (a = "&"), this.link + a + o + "=" + t + "&r=" + n
    }
}

function RecommendedJobNotification(t, i, e, o, n) {
    NotificationItem.call(this, NotificationType.RECOMMENDEDJOB, t, i, e, o, n), this.displayInNotificationPanel = function() {
        return '<div class="notification"><div class="notification-content"><span class="notification-prompt">Recommended job</span><span class="notification-title block-ellipsis">' + this.title + '</span><span class="notification-subtitle">' + (this.subtitle || " ") + '</span><span class="notification-text block-ellipsis">' + (this.body || " ") + "</span></div></div>"
    }, this.displayOnNotificationPage = function() {
        return '<div class="row"><div class="notification-page-notification-details col-xs-12"><p class="notification-page-notification-type">Recommended job</span></p><p class="notification-page-notification-title">' + this.title + "</p>" + ("" !== this.subtitle ? '<p class="notification-page-notification-infoMessage">' + this.subtitle + "</p>" : "") + '<p class="notification-page-notification-text">' + (this.body || " ") + "</p></div></div>"
    }
}

function JbeUpdateNotification(t, i, e, o, n) {
    NotificationItem.call(this, NotificationType.JBEUPDATE, t, i, e, o, n), this.displayInNotificationPanel = function() {
        return '<div class="notification"><div class="notification-icon jbe-update-notification-icon" >' + this.icon(50, 5, 50) + '</div><div class="notification-content jbe-update-notification-content"><span class="notification-prompt">Email alerts</span><span class="jbe-update-notification-title">' + this.title + '</span><span class="jbe-update-notification-body">' + (this.body || " ") + "</span></div></div>"
    }, this.displayOnNotificationPage = function() {
        return '<div class="row"><div class="notification-page-notification-details col-xs-1">' + this.icon(60, -5, 40) + '</div><div class="notification-page-notification-details col-xs-11"><p class="notification-page-notification-type">Email alerts</p><p class="jbe-update-notification-page-title">' + this.title + '</p><p class="jbe-update-notification-page-body">' + (this.body || " ") + "</p></div></div>"
    }, this.icon = function(t, i, e) {
        return '<svg width="' + t + 'px" height="' + t + 'px" viewBox="' + i + " " + i + " " + e + " " + e + '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"><g id="Alerts" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-7" transform="translate(6.000000, 9.000000)"><g id="Group-6"><g id="Group-4" transform="translate(12.158300, 8.250000)"><path d="M11.9042,5.4098 L13.0834,4.7289 L11.4334,1.8711 L10.2443,2.5575 C9.6613,2.0229 8.9639,1.6247 8.1917,1.3794 L8.1917,-3.46389584e-14 L4.8917,-3.46389584e-14 L4.8917,1.3794 C4.1195,1.6247 3.4221,2.0229 2.8391,2.5575 L1.65,1.8711 L-1.50990331e-14,4.7289 L1.1792,5.4098 C0.9966,6.2326 0.9955,6.9641 1.1792,7.7913 L0.0022,8.4711 L1.6522,11.3289 L2.8391,10.6436 C3.4221,11.1771 4.1195,11.5753 4.8917,11.8206 L4.8917,13.2 L8.1917,13.2 L8.1917,11.8206 C8.9639,11.5753 9.6613,11.1771 10.2443,10.6436 L11.4312,11.3289 L13.0812,8.4711 L11.9042,7.7913 C12.0879,6.9641 12.0868,6.2326 11.9042,5.4098 L11.9042,5.4098 Z" id="Stroke-611" fill="#CCCCCC"></path><path d="M8.7417,6.6 C8.7417,7.8144 7.7572,8.8 6.5417,8.8 C5.3273,8.8 4.3417,7.8144 4.3417,6.6 C4.3417,5.3856 5.3273,4.4 6.5417,4.4 C7.7572,4.4 8.7417,5.3856 8.7417,6.6 L8.7417,6.6 Z" id="Stroke-612" stroke="#000000" stroke-width="1.1" fill="#FFFFFF" stroke-linejoin="round"></path></g><path d="M9.9,15.4 L1.6214,15.4 C0.7106,15.4 -4.61852778e-14,14.6608 -4.61852778e-14,13.75 L-4.61852778e-14,1.65 C-4.61852778e-14,0.7381 0.7106,-1.24344979e-14 1.6214,-1.24344979e-14 L21.4214,-1.24344979e-14 C22.3322,-1.24344979e-14 23.1,0.7381 23.1,1.65 L23.1,6.6" id="Stroke-613" stroke="#000000" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path><polyline id="Stroke-614" stroke="#000000" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" points="22.58432 0.5038 11.52052 9.35 0.45562 0.4983"></polyline></g><path d="M24.0625,13.6598 L25.2417,12.9789 L23.5917,10.1211 L22.4026,10.8075 C21.8196,10.2729 21.1222,9.8747 20.35,9.6294 L20.35,8.25 L17.05,8.25 L17.05,9.6294 C16.2778,9.8747 15.5804,10.2729 14.9974,10.8075 L13.8083,10.1211 L12.1583,12.9789 L13.3375,13.6598 C13.1549,14.4826 13.1538,15.2141 13.3375,16.0413 L12.1605,16.7211 L13.8105,19.5789 L14.9974,18.8936 C15.5804,19.4271 16.2778,19.8253 17.05,20.0706 L17.05,21.45 L20.35,21.45 L20.35,20.0706 C21.1222,19.8253 21.8196,19.4271 22.4026,18.8936 L23.5895,19.5789 L25.2395,16.7211 L24.0625,16.0413 C24.2462,15.2141 24.2451,14.4826 24.0625,13.6598 L24.0625,13.6598 Z" id="Stroke-611" stroke="#000000" stroke-width="1.1" stroke-linejoin="round"></path></g></g></svg>'
    }
}

function NotificationsModel() {
    this.iconState = NotificationIconState.OUTLINE, this.notificationItemList = [], this.clickSourceIsIcon = !1, this.isMobile = !1, this.iconClickTrackingDescription = function() {
        switch (this.iconState) {
            case NotificationIconState.OUTLINE:
                return "Click on notification icon outline";
            case NotificationIconState.FILLED:
                return "Click on notification icon filled";
            case NotificationIconState.FILLEDWITHDOT:
                return "Click on notification icon filled with dot";
            default:
                return "unknown"
        }
    }
}

function NotificationsTracker(t) {
    this.queryStringParameterNameForANotificationSource = t, this.trackingVars = "eVar23,eVar30,eVar77,list2,list3,eVar40,eVar28,eVar29", this.eVar147ControlOrTestOrNothing = "", this.trackIconClick = function(t) {
        this.trackEvent("event987", t)
    }, this.trackNotificationLinkClick = function(t, i) {
        sessionStorage.setItem("NotificationType", t), sessionStorage.setItem("NotificationClickChannel", i), this.trackEvent("event74", "Notification Link Click")
    }, this.isJBEUpdateFromTest = function() {
        return this.isUpdateDetailsPage() && this.isBrowserReload() === !1 && this.isInDormTest()
    }, this.isUpdateDetailsPage = function() {
        return location.pathname.toLowerCase().indexOf("/authenticated/default") > -1
    }, this.trackJBEUpdateClickThrough = function() {
        this.trackEventAddEvars("event84", "JBE Update Clicked After Notification Click", [{
            code: "eVar144",
            value: this.sourceOfJBEClick()
        }, {
            code: "eVar147",
            value: this.eVar147ControlOrTestOrNothing
        }])
    }, this.isJBEDetailsUpdateSubmitted = function() {
        return this.isUpdatedDetailsSubmittedPage() && this.isBrowserReload() === !1
    }, this.isUpdatedDetailsSubmittedPage = function() {
        return location.pathname.toLowerCase().indexOf("/jobsbyemailsetupsubmit") > -1 && location.search && location.search.toLowerCase().indexOf("isediting=") > -1 && location.search.toLowerCase().indexOf("seqno=") > -1
    }, this.trackJBEUpdateSubmitted = function() {
        this.trackEventAddEvars("event85", "JBE Details Updated", [{
            code: "eVar144",
            value: this.sourceOfJBEClick()
        }, {
            code: "eVar147",
            value: this.eVar147ControlOrTestOrNothing
        }])
    }, this.checkAndTrackIfNotificationsListIsSourceOfJobClickAndOnJobDetailsPage = function() {
        var t = "";
        return this.isJobDetailsPage() && this.isSourcedFromNotificationList() && (window.location.search.indexOf(SourceOfNotification.NOTIFICATIONPAGE) > -1 ? t += "RecommendedJob_CandidateHubPage" : window.location.search.indexOf(SourceOfNotification.POPUPPANEL) > -1 && (t += "RecommendedJob_NotificationPanel"), "" !== t && this.removeTrackingQueryString()), t
    }, this.trackEventWithEvars = function(t, i, e) {
        if ("undefined" != typeof s && null !== s) {
            s.linkTrackVars = e, s.linkTrackEvents = t, s.events = t;
            var o = i;
            s.tl(this, "o", o), s.events = "", s.linkTrackEvents = ""
        }
    }, this.trackEvent = function(t, i) {
        "undefined" != typeof s && null !== s && this.trackEventWithEvars(t, i, this.trackingVars)
    }, this.trackEventAddEvars = function(t, e, o) {
        if ("undefined" != typeof s && null !== s) {
            var n = this.trackingVars;
            if (null !== o)
                for (i = 0; i < o.length; i++) {
                    var a = o[i];
                    n.toLowerCase().indexOf(a.code.toLowerCase()) === -1 && (n += "," + a.code), s[a.code] = a.value
                }
            if (this.trackEventWithEvars(t, e, n), null !== o)
                for (i = 0; i < o.length; i++) s[o[i].code] = ""
        }
    }, this.trackOccurence = function(t, i, e) {
        if ("undefined" != typeof s && null !== s) {
            var o = {};
            s.linkTrackVars = t + "," + this.trackingVars, o[t] = e, s.tl(!0, "o", i, o)
        }
    }, this.removeTrackingQueryString = function() {
        if (history.pushState) {
            var t = this.stripTrackingParameterFromQueryString(window.location.search),
                i = window.location.protocol + "//" + window.location.host + window.location.pathname + t;
            window.history.pushState({
                path: i
            }, "", i)
        }
    }, this.stripTrackingParameterFromQueryString = function(t) {
        var i = t;
        for (var e in SourceOfNotification)
            if (SourceOfNotification.hasOwnProperty(e)) {
                var o;
                SourceOfNotification.hasOwnProperty(e) && (o = new RegExp(this.queryStringParameterNameForANotificationSource + "=" + SourceOfNotification[e]), i = i.replace(o, "")), o = new RegExp("\\?\\&"), i = i.replace(o, "?"), o = new RegExp("\\&\\&"), i = i.replace(o, "&")
            }
        return i
    }, this.isJobDetailsPage = function() {
        return location.pathname.toLowerCase().indexOf("/job/") > -1
    }, this.isSourcedFromNotificationList = function() {
        return window.location.search.indexOf(this.queryStringParameterNameForANotificationSource) > -1
    }, this.removeSpecificEvarsWhenSourceIsANotification = function() {
        "undefined" != typeof analytics && null != analytics && (analytics.ConversionType = "", analytics.ListingPosition = "", analytics.ConversionSource = "", analytics.ResultsListPage = "")
    }, this.notificationChannel = function() {
        var t = sessionStorage.getItem("NotificationClickChannel");
        return null == t ? "unknown" : t === SourceOfNotification.NOTIFICATIONPAGE ? "CandidateHubPage" : "NotificationPanel"
    }, this.sourceOfJBEClick = function() {
        return "B_PAP-234" === this.eVar147ControlOrTestOrNothing ? "JBECredentials_" + this.notificationChannel() : ""
    }, this.isInDormTest = function() {
        return "" !== this.eVar147ControlOrTestOrNothing
    }, this.isBrowserReload = function() {
        return !!(performance && performance.navigation && performance.navigation.type) && 1 === performance.navigation.type
    }
}

function NotificationsIconDisplayer(t, i) {
    this.desktopNotificationIconDivId = t, this.mobileNotificationIconDivId = i, this.iconIconSelector = "#" + this.desktopNotificationIconDivId + " > span, #" + this.mobileNotificationIconDivId + " > a", this.iconParentIdsSelector = "#" + this.desktopNotificationIconDivId + ", #" + this.mobileNotificationIconDivId, this.displayIconState = function(t) {
        var i = "nc-icon-filled-new";
        t === NotificationIconState.FILLED && (i = "nc-icon-filled"), t === NotificationIconState.OUTLINE && (i = "nc-icon-outline"), $(this.iconIconSelector).attr("class", "nc-icon " + i + " navbar-item")
    }
}

function NotificationsIconStateManager() {
    this.switchIconStateOnIconClick = function(t) {
        return t === NotificationIconState.OUTLINE || t === NotificationIconState.FILLEDWITHDOT ? NotificationIconState.FILLED : NotificationIconState.OUTLINE
    }, this.switchIconStateOnDocumentClick = function(t) {
        return t === NotificationIconState.FILLED ? NotificationIconState.OUTLINE : t
    }
}

function NotificationsIconStateStorer() {
    this.localStorageItem = "NotificationIconState", this.storeIconState = function(t) {
        var i = t === NotificationIconState.FILLED ? NotificationIconState.OUTLINE : t;
        localStorage.setItem(this.localStorageItem, JSON.stringify(i))
    }, this.retrieveIconState = function(t) {
        var i = JSON.parse(localStorage.getItem(this.localStorageItem));
        return i ? parseInt(i) : t
    }
}

function RecommenderJobsScraper() {
    this.scrapeJobs = function() {
        var t = this,
            i = [];
        return $(".rj-results-container").children()[0] ? ($(".rj-job-container").each(function() {
            var e = $(this),
                o = t.scrapeJob(e);
            "" === o.title && "" === o.link || i.push(o)
        }), i) : i
    }, this.scrapeJob = function(t) {
        var i = {
            jobTitle: this.scrapeProperty(t, ".rj-jobtitle > a > span", ".rj-jobtitle div > a", !1),
            jobHref: this.scrapeProperty(t, ".rj-jobtitle > a", ".rj-jobtitle div > a", !0),
            jobLocation: this.scrapeProperty(t, ".rj-details > li:nth-child(1) > span:nth-child(2)", "", !1),
            jobSalary: this.scrapeProperty(t, ".rj-details > li:nth-child(2) > span:nth-child(2)", "", !1),
            jobCompany: this.scrapeProperty(t, ".rj-details > li:nth-child(3) > span:nth-child(2)", "", !1),
            jobType: this.scrapeProperty(t, ".rj-details > li:nth-child(4) > span:nth-child(2)", "", !1),
            infoMessage: this.scrapeProperty(t, ".backfilled-info-message", "", !1),
            notificationType: NotificationType.RECOMMENDEDJOB
        };
        return i.jobLocationSalaryCompanyType = i.jobLocation.split(",")[0], i.jobLocationSalaryCompanyType += "" !== i.jobSalary && "not specified" !== i.jobSalary.toLowerCase() ? " - " + i.jobSalary : "", i.jobLocationSalaryCompanyType += "" !== i.jobCompany ? " - " + i.jobCompany : "", i.jobLocationSalaryCompanyType += "" !== i.jobType ? " - " + i.jobType : "", new RecommendedJobNotification(i.jobHref, i.jobTitle, i.infoMessage, i.jobLocationSalaryCompanyType, new Date)
    }, this.scrapeProperty = function(t, i, e, o) {
        if (!t) return "";
        var n = this.scrapeNode(t, i, o);
        return n ? n.trim() : "" === e ? "" : (n = this.scrapeNode(t, e, o), n ? n.trim() : "")
    }, this.scrapeNode = function(t, i, e) {
        var o = t.find(i);
        if (o) {
            if (e) {
                var n = o.attr("href");
                return n ? n.split("?")[0] : ""
            }
            return o.text() ? o.text() : ""
        }
        return ""
    }
}

function NotificationsABTestManager(t, i) {
    this.localStorageKey = t, this.probabilityOfBeingIncludedInTest = i, this.urlOverrideParameter = "notificationstestsegment", this.hasAlreadyBeenAssignedForTest = function() {
        var t = localStorage.getItem(this.localStorageKey);
        return !!t
    }, this.previousTestSegment = function() {
        return localStorage.getItem(this.localStorageKey)
    }, this.getNewSegment = function() {
        var t = Math.random(),
            i = t > 1 - this.probabilityOfBeingIncludedInTest ? NotificationsABTestSegments.TEST : NotificationsABTestSegments.CONTROL;
        return this.storeSegmentChoice(i), i
    }, this.storeSegmentChoice = function(t) {
        localStorage.setItem(this.localStorageKey, t)
    }, this.segmentChoiceIsOverridenInUrl = function() {
        return null != location.search && location.search.toLowerCase().indexOf(this.urlOverrideParameter + "=") > -1
    }, this.segmentChoiceFromUrl = function() {
        if (location.search.toLowerCase().indexOf(this.urlOverrideParameter + "=") < 0) return -1;
        var t = location.search.toLowerCase().indexOf(this.urlOverrideParameter + "=" + NotificationsABTestSegments.CONTROL) > -1 ? NotificationsABTestSegments.CONTROL : NotificationsABTestSegments.TEST;
        return this.storeSegmentChoice(t), t
    }
}

function JbeUpdateNotificationCreater() {
    this.linkToJBEPage = "/Authenticated/Default.aspx#MyJBE", this.titleText = "It's been 50+ days since your last activity. Are your alerts up to date?", this.linkText = "Update email criteria", this.dormantReactivationRegex = new RegExp("CLC_[A-Z]+_Dormant"), this.jBEUpdateABTestManager = new NotificationsABTestManager("JbeUpdateNotification", .5), this.testSegment = "", this.intTestSegment = function() {
        var t = -1;
        return this.jBEUpdateABTestManager.segmentChoiceIsOverridenInUrl() ? t = this.jBEUpdateABTestManager.segmentChoiceFromUrl() : this.jBEUpdateABTestManager.hasAlreadyBeenAssignedForTest() ? t = parseInt(this.jBEUpdateABTestManager.previousTestSegment()) : this.meetsCriteriaForDormantReactionTest() && (t = this.jBEUpdateABTestManager.getNewSegment()), t
    }, this.isInTest = function() {
        return this.intTestSegment() > -1
    }, this.setJbeTestTrackingDescription = function() {
        if (this.testSegment = "", this.isInTest()) {
            var t = this.intTestSegment();
            this.testSegment = t === NotificationsABTestSegments.TEST ? "B_PAP-234" : "A_PAP-234", this.setJBENotificationTestSegmentDirectlyOrThroughEvent()
        }
    }, this.generateJbeUpdateNotificationsIfQualifies = function(t) {
        var i = [];
        return this.intTestSegment() === NotificationsABTestSegments.TEST && this.currentNotificationListContainsJBEUpdateAlready(t) === !1 && this.meetsCriteriaForDormantReactionTest() && i.push(new JbeUpdateNotification(this.linkToJBEPage, this.titleText, "", this.linkText, new Date)), i
    }, this.updateJbeNotificationExpiryDateIfQualifies = function(t) {
        if (this.intTestSegment() === NotificationsABTestSegments.TEST && this.currentNotificationListContainsJBEUpdateAlready(t) === !0 && this.meetsCriteriaForDormantReactionTest())
            for (var i = 0; i < t.length; i++) t[i].notificationType === NotificationType.JBEUPDATE && (t[i].dateCreated = new Date);
        return t
    }, this.meetsCriteriaForDormantReactionTest = function() {
        return this.urlContainsDormantQualifier() && this.isExcludedBrand() === !1
    }, this.urlContainsDormantQualifier = function() {
        return this.testAQueryStringForDormantQualifier(location.search)
    }, this.isExcludedBrand = function() {
        return this.testHostNameForExcludedBrand(window.location.hostname)
    }, this.testHostNameForExcludedBrand = function(t) {
        var i = !1;
        if (null == t) return !1;
        var e = ["jobsite.", "emedcareers.", "cityjobs.", "justengineers."];
        return e.forEach(function(e) {
            i = t.toLowerCase().indexOf(e) > -1 || i
        }), i
    }, this.testAQueryStringForDormantQualifier = function(t) {
        return this.dormantReactivationRegex.test(t)
    }, this.currentNotificationListContainsJBEUpdateAlready = function(t) {
        if ("undefined" != typeof t && t.length > 0)
            for (var i = 0; i < t.length; i++)
                if (t[i].notificationType === NotificationType.JBEUPDATE) return !0;
        return !1
    }, this.assignJBENotificationTestSegment = function(t) {
        "undefined" == typeof s.eVar147 || null == s.eVar147 || 0 === s.eVar147.length ? s.eVar147 = t : s.eVar147 += "," + t
    }, this.setJBENotificationTestSegmentDirectlyOrThroughEvent = function() {
        "undefined" != typeof s ? this.assignJBENotificationTestSegment(this.testSegment) : (tempNotificationsTracker = this, document.getElementById("body").addEventListener("analyticsPreSend", function() {
            tempNotificationsTracker.assignJBENotificationTestSegment(tempNotificationsTracker.testSegment)
        }))
    }
}

function NotificationsListLocalStorer() {
    this.localStorageItem = "recommendedJobsNotifications", this.storeNotificationsInLocalStorage = function(t) {
        localStorage.setItem(this.localStorageItem, JSON.stringify(t))
    }, this.getNotificationsFromLocalStorage = function() {
        var t = JSON.parse(localStorage.getItem(this.localStorageItem));
        return t = this.checkIfNotificationsAreNotOfCurrentForm(t), t = this.createListOfCorrectNotificationsObjects(t), t ? t : []
    }, this.checkIfNotificationsAreNotOfCurrentForm = function(t) {
        if (t && t.length > 0 && t[0].hasOwnProperty("link") === !1) {
            for (var i = [], e = 0; e < t.length; e++) i.push(this.translateFromJobToNotification(t[e]));
            return i
        }
        return t
    }, this.createListOfCorrectNotificationsObjects = function(t) {
        if (t && t.length > 0) {
            for (var i = [], e = 0; e < t.length; e++) {
                var o = this.createCorrectNotificationObject(t[e]);
                o && i.push(o)
            }
            return i
        }
        return t
    }, this.createCorrectNotificationObject = function(t) {
        if (!t || !t.hasOwnProperty("notificationType")) return null;
        var i = "undefined" == typeof t.dateCreated || null == t.dateCreated ? new Date : new Date(t.dateCreated);
        switch (i = i.getFullYear() < 2019 || i > new Date ? new Date : i, t.notificationType) {
            case NotificationType.RECOMMENDEDJOB:
                return new RecommendedJobNotification(t.link, t.title, t.subtitle, t.body, i);
            case NotificationType.JBEUPDATE:
                return new JbeUpdateNotification(t.link, t.title, t.subtitle, t.body, i);
            default:
                return new RecommendedJobNotification(t.link, t.title, t.subtitle, t.body, i)
        }
    }, this.translateFromJobToNotification = function(t) {
        return new RecommendedJobNotification(t.jobHref, t.jobTitle, t.infoMessage, t.jobLocationSalaryCompanyType)
    }
}

function NotificationsListManager() {
    this.deDupeProperty = "link", this.maxListLength = 20, this.sortNotifications = function(t) {
        t.sort(function(t, i) {
            return t.notificationType !== i.notificationType ? t.notificationType === NotificationType.JBEUPDATE ? -1 : 1 : 0
        })
    }, this.addNewNotifications = function(t, i) {
        var e = [];
        return e = i ? t.concat(i) : t, e = this.removeDuplicates(e, this.deDupeProperty), e = e.slice(0, this.maxListLength)
    }, this.removeDuplicates = function(t, i) {
        var e = [],
            o = {};
        for (var n in t) t.hasOwnProperty(n) && (o[t[n][i]] = t[n]);
        for (var a in o) o.hasOwnProperty(a) && e.push(o[a]);
        return e
    }, this.makeListBackWardCompatible = function(t) {
        for (var i = 0; i < t.length; i++) {
            var e = t[i];
            "undefined" != typeof e.notificationType && null != e.notificationType || (e.notificationType = "Recommended Job"), "undefined" != typeof e.jobLocationSalaryCompanyType && null != e.jobLocationSalaryCompanyType || (e.jobLocationSalaryCompanyType = "", e.jobLocationSalaryCompanyType += "undefined" != typeof e.jobLocation ? e.jobLocation.split(",")[0] : "", e.jobLocationSalaryCompanyType += "undefined" != typeof e.jobSalary && "" !== e.jobSalary && "not specified" !== e.jobSalary.toLowerCase() ? " - " + e.jobSalary : "", e.jobLocationSalaryCompanyType += "undefined" != typeof e.jobCompany && "" !== e.jobCompany ? " - " + e.jobCompany : "", e.jobLocationSalaryCompanyType += "undefined" != typeof e.jobType && "" !== e.jobType ? " - " + e.jobType : "")
        }
    }, this.expireNotificationsFromList = function(t) {
        if (t && t.length > 0) {
            for (var i = [], e = 0; e < t.length; e++) {
                var o = t[e];
                o && o.isExpired() === !1 && i.push(o)
            }
            return i
        }
        return t
    }
}

function NotificationsListDisplayer(t, i, e) {
    this.mobileNotificationListDivId = t, this.desktopNotificationPageUrl = i, this.trackingManagerName = e, this.maxNotifications = 20, this.notificationHeaderHeight = 80, this.notificationsPopUpSelector = ".nc-desktop-container  > .nc-container, .notification-list", this.notificationsPageListSelector = ".notifications-page-list", this.notificationsPageBackButtonId = "#notifications-page-back-button", this.notificationsPageMobileBackButtonSelector = ".notifications-mobile-backarrow", this.desktopNotificationMoreNotificationsMessage = "View all notifications", this.trackingLink = function(t, i) {
        return this.trackingManagerName + ".trackNotificationLinkClick('" + t + "','" + i + "')"
    }, this.displayNotifications = function(t, i, e) {
        var o = this.noNotificationsMessageHtmlOnNotificationsPage(),
            n = this.choosePanelOrPageDivId(i);
        if (i === SourceOfNotification.POPUPPANEL ? e === !1 ? this.maxNotifications = 3 : this.switchMobileNotificationsPanelOnOrOff(!0) : this.displayBackButtonOnNotificationPage(), t && t.length > 0) {
            o = "";
            for (var a = 1, r = 0; r < Math.min(this.maxNotifications, t.length); r++) t[r] && (o += i === SourceOfNotification.POPUPPANEL ? this.displayNotificationInPanel(t[r], a) : this.displayNotificationOnPage(t[r], a), a++);
            o += i === SourceOfNotification.POPUPPANEL && e === !1 ? this.desktopNotificationMoreNotificationsHtmlLink() : ""
        }
        $(n).html(o)
    }, this.displayNotificationInPanel = function(t, i) {
        console.log(t);
        var e = '<a class="notification-list-link" href="' + t.addNotificationQueryStringToUrl(SourceOfNotification.POPUPPANEL, i) + '" onclick="' + this.trackingLink(t.notificationType, SourceOfNotification.POPUPPANEL) + '">' + t.displayInNotificationPanel() + "</a>";
        return e
    }, this.displayNotificationOnPage = function(t, i) {
        var e = '<div class="notification-page-notification col-xs-12"><a href="' + t.addNotificationQueryStringToUrl(SourceOfNotification.NOTIFICATIONPAGE, i) + '" onclick="' + this.trackingLink(t.notificationType, SourceOfNotification.NOTIFICATIONPAGE) + '">' + t.displayOnNotificationPage() + "</a></div>";
        return e
    }, this.isNotificationsDisplayPage = function() {
        return location.pathname.toLowerCase().indexOf(this.desktopNotificationPageUrl.toLowerCase()) !== -1
    }, this.choosePanelOrPageDivId = function(t) {
        return t === SourceOfNotification.POPUPPANEL ? this.notificationsPopUpSelector : this.notificationsPageListSelector
    }, this.displayBackButtonOnNotificationPage = function() {
        document.referrer ? ($(this.notificationsPageBackButtonId).attr("href", document.referrer), $(this.notificationsPageMobileBackButtonSelector).attr("href", document.referrer)) : $(this.notificationsPageBackButtonId).hide()
    }, this.desktopNotificationMoreNotificationsHtmlLink = function() {
        return '<a class="notification-list-link" href="' + this.desktopNotificationPageUrl + '" ><div class="notification-view-more">' + this.desktopNotificationMoreNotificationsMessage + "</div></a>"
    }, this.switchMobileNotificationsPanelOnOrOff = function(t) {
        $("#" + this.mobileNotificationListDivId).attr("class", t ? "slideInRight" : "slideOutRight");
        var i = $(window).height() - this.notificationHeaderHeight;
        $("#" + this.mobileNotificationListDivId + " .notification-list").css("height", i + "px"), t ? $("body").css("overflow-y", "hidden") : $("body").css("overflow-y", "auto")
    }, this.noNotificationsMessageHtmlForPanel = function() {
        return '<div class="notification"><div class="notification-icon welcome-notification"></div><div class="notification-content"><p class="notification-text"><br>You have no new notifications</p></div></div>'
    }, this.noNotificationsMessageHtmlOnNotificationsPage = function() {
        return '<div class="notification-page-notification col-xs-12"><div class="row"><div class="notification-page-notification-details col-xs-12"><p style="padding-top:23px;padding-bottom:10px" class="notification-page-notification-title">You have no new notifications</p></div></div></div>'
    }
}

function NotificationsController() {
    this.fetchModelFromStorageAndPageProperties = function() {
        notificationsIconDisplayer.notificationHeaderHeight = $("#" + notificationsMobilePanel + " .notification-header").outerHeight(), notificationsModel.isMobile = !$(desktopDiv).is(":visible"), notificationsModel.notificationItemList = notificationsListLocalStorer.getNotificationsFromLocalStorage(), notificationsModel.notificationItemList = notificationsListManager.expireNotificationsFromList(notificationsModel.notificationItemList), notificationsModel.notificationItemList = jBEUpdateNotificationCreater.updateJbeNotificationExpiryDateIfQualifies(notificationsModel.notificationItemList), notificationsListLocalStorer.storeNotificationsInLocalStorage(notificationsModel.notificationItemList), notificationsModel.iconState = notificationsIconStateStorer.retrieveIconState(NotificationIconState.OUTLINE), notificationsTracker.isJobDetailsPage() && "" !== eVar144Value && notificationsTracker.removeSpecificEvarsWhenSourceIsANotification(), jBEUpdateNotificationCreater.isInTest() && jBEUpdateNotificationCreater.setJbeTestTrackingDescription(), notificationsTracker.eVar147ControlOrTestOrNothing = jBEUpdateNotificationCreater.testSegment, notificationsTracker.isJBEUpdateFromTest() && notificationsTracker.trackJBEUpdateClickThrough(), notificationsTracker.isJBEDetailsUpdateSubmitted() && notificationsTracker.trackJBEUpdateSubmitted()
    }, this.addNewNotifications = function(t) {
        t.length > 0 && (notificationsModel.iconState = NotificationIconState.FILLEDWITHDOT, notificationsModel.notificationItemList = notificationsListManager.addNewNotifications(t, notificationsModel.notificationItemList), notificationsListManager.sortNotifications(notificationsModel.notificationItemList), notificationsListDisplayer.isNotificationsDisplayPage() && notificationsListDisplayer.displayNotifications(notificationsModel.notificationItemList, SourceOfNotification.NOTIFICATIONPAGE, notificationsModel.isMobile), notificationsIconDisplayer.displayIconState(notificationsModel.iconState), notificationsIconStateStorer.storeIconState(notificationsModel.iconState), notificationsListLocalStorer.storeNotificationsInLocalStorage(notificationsModel.notificationItemList))
    }, this.iconClicked = function() {
        notificationsModel.clickSourceIsIcon = !0, notificationsModel.isMobile = !$(desktopDiv).is(":visible"), notificationsModel.iconState !== NotificationIconState.FILLED && notificationsTracker.trackIconClick(notificationsModel.iconClickTrackingDescription()), notificationsModel.iconState = notificationsIconStateManager.switchIconStateOnIconClick(notificationsModel.iconState), notificationsIconStateStorer.storeIconState(notificationsModel.iconState)
    }, this.documentOrGlyphonClick = function(t) {
        notificationsModel.clickSourceIsIcon !== !0 && (notificationsModel.iconState = notificationsIconStateManager.switchIconStateOnDocumentClick(notificationsModel.iconState), notificationsIconDisplayer.displayIconState(notificationsModel.iconState), notificationsIconStateStorer.storeIconState(notificationsModel.iconState), t && notificationsModel.isMobile && notificationsListDisplayer.switchMobileNotificationsPanelOnOrOff(!1)), notificationsModel.clickSourceIsIcon = !1
    }, this.pageView = function() {
        notificationsIconDisplayer.displayIconState(notificationsModel.iconState), notificationsListDisplayer.isNotificationsDisplayPage() && notificationsListDisplayer.displayNotifications(notificationsModel.notificationItemList, SourceOfNotification.NOTIFICATIONPAGE, notificationsModel.isMobile)
    }, this.iconPoweredPanelView = function() {
        notificationsIconDisplayer.displayIconState(notificationsModel.iconState), notificationsListDisplayer.displayNotifications(notificationsModel.notificationItemList, SourceOfNotification.POPUPPANEL, notificationsModel.isMobile)
    }
}
jQuery.isNumber = function(t) {
    return "object" == typeof t && null !== t ? "number" == typeof t.valueOf() : "number" == typeof t
}, jQuery.isBoolean = function(t) {
    return "object" == typeof t && null !== t ? "boolean" == typeof t.valueOf() : "boolean" == typeof t
}, jQuery.isNull = function(t) {
    return null === t
}, jQuery.isUndefined = function(t) {
    return "undefined" == typeof t
}, jQuery.isNullOrUndefined = function(t) {
    return jQuery.isNull(t) || jQuery.isUndefined(t)
}, jQuery.isString = function(t) {
    return "string" == typeof t
}, jQuery.isArray = function(t) {
    return null != t && "object" == typeof t && "splice" in t && "join" in t
}, jQuery.emptyString = function(t) {
    if (jQuery.isNullOrUndefined(t)) return !0;
    if (!jQuery.isString(t)) throw "isEmpty: the object is not a string";
    return 0 === t.length
}, jQuery.startsWith = function(t, i) {
    return !!jQuery.isString(t) && 0 === t.indexOf(i)
}, jQuery.endsWith = function(t, i) {
    return !(!jQuery.isString(t) || !jQuery.isString(i) || jQuery.emptyString(t) || jQuery.emptyString(i)) && (!(i.length > t.length) && t.length - i.length === t.lastIndexOf(i))
}, jQuery.formatString = function() {
    if (arguments.length < 2) return "";
    for (var t = arguments[0], i = 1; i < arguments.length; i++) {
        var e = "";
        jQuery.isNullOrUndefined(e) || (e = arguments[i] + "");
        var o = new RegExp("\\{" + (i - 1) + "\\}", "g");
        t = t.replace(o, e)
    }
    return t
}, jQuery.log = function() {
    "undefined" != typeof console && console.log(jQuery.formatString.apply(this, arguments))
};
var TotalJobsGroup = TotalJobsGroup || {};
TotalJobsGroup.Header = TotalJobsGroup.Header || {}, TotalJobsGroup.Header.GlobalSetup = function() {
    function t() {
        try {
            window.console || (window.console = {}, window.console.log = function() {}), console.log("Hello web developer, we're hiring! Find out at more at https://www.totaljobs.com/jobs-at/totaljobs-group/profile")
        } catch (t) {}
    }
    t()
}();
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {
        var i = function() {
            function t(t) {
                this.$ = t
            }
            return t.prototype.collapseToggles = function(t) {
                for (var i = this.$, e = 0; e < t.length; e++) {
                    var o = t[e],
                        n = i(o).attr("data-target"),
                        a = i(n);
                    i(o).hasClass("collapsed") || i(a).collapse("hide")
                }
            }, t.prototype.initialize = function() {
                var t = this,
                    i = this.$;
                i.fn.collapse.Constructor.TRANSITION_DURATION = 1, i(document).on("click", function(e) {
                    var o = i(e.target);
                    if (!(o.closest(".navbar-collapse,.ui-widget").length > 0)) {
                        var n, a = o.closest(".navbar-toggle");
                        n = 0 === a.length ? i(".navbar-toggle") : i(".navbar-toggle").not(a), t.collapseToggles(n)
                    }
                }), i(window).bind("pageshow", function(i) {
                    var e = t.$;
                    if (i.originalEvent.persisted) {
                        var o = e(".navbar-toggle");
                        t.collapseToggles(e(o))
                    }
                })
            }, t
        }();
        t.Toggles = i
    }(i = t.Header || (t.Header = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup = TotalJobsGroup || {};
TotalJobsGroup.Header = TotalJobsGroup.Header || {}, TotalJobsGroup.Config = TotalJobsGroup.Config || {}, TotalJobsGroup.Config.Global = TotalJobsGroup.Config.Global || {}, TotalJobsGroup.Header.UserAgent = TotalJobsGroup.Header.UserAgent || function(t, i) {
    "use strict";

    function e() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }

    function o() {
        return e() < a.MobileScreenWidth
    }

    function n() {
        return t.isNull(navigator.userAgent.match(/(iPod|iPhone|iPad)/gim)) === !1 && t.isNull(navigator.userAgent.match(/(AppleWebKit)/gim)) === !1
    }
    var a = i;
    return {
        isMobileScreenWidth: o,
        isMobileSafari: n
    }
}(jQuery, TotalJobsGroup.Config.Global);
var TotalJobsGroup = TotalJobsGroup || {};
TotalJobsGroup.Header = TotalJobsGroup.Header || {}, TotalJobsGroup.Header.AutoCompleteService = TotalJobsGroup.Header.AutoCompleteService || function(t) {
    "use strict";

    function i(i) {
        var e = JSON.stringify(i.data);
        t.ajax({
            type: "POST",
            url: i.url,
            contentType: "application/json; charset=utf-8",
            data: e,
            success: i.successCallback,
            error: function() {
                return "Sorry, an error occurred :("
            }
        })
    }
    return {
        search: i
    }
}(jQuery);
var TotalJobsGroup = TotalJobsGroup || {};
TotalJobsGroup.localStorage = TotalJobsGroup.localStorage || function(t) {
    "use strict";

    function i(t) {
        return window.localStorage.getItem(t)
    }

    function e(t, i) {
        window.localStorage.setItem(t, i)
    }

    function o() {
        try {
            return window.localStorage.setItem("isLocalStorageSupported", "true"), window.localStorage.removeItem("isLocalStorageSupported"), !0
        } catch (t) {
            return !1
        }
    }
    return {
        getItem: i,
        setItem: e,
        isLocalStorageSupported: o
    }
}(jQuery);
var TotalJobsGroup = TotalJobsGroup || {};
TotalJobsGroup.sessionStorage = TotalJobsGroup.sessionStorage || function(t) {
    "use strict";

    function i(t) {
        return window.sessionStorage.getItem(t)
    }

    function e(t, i) {
        window.sessionStorage.setItem(t, i)
    }

    function o() {
        try {
            return window.sessionStorage.setItem("isSessionStorageSupported", "true"), window.sessionStorage.removeItem("isSessionStorageSupported"), !0
        } catch (t) {
            return !1
        }
    }
    return {
        getItem: i,
        setItem: e,
        isSessionStorageSupported: o
    }
}(jQuery);
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {
        ! function(t) {
            t[t.NotLoggedIn = 0] = "NotLoggedIn", t[t.SoftLogin = 1] = "SoftLogin", t[t.HardLogin = 2] = "HardLogin"
        }(t.LoggedInState || (t.LoggedInState = {}));
        var i = t.LoggedInState,
            e = function() {
                function t(t, i, e, o, n) {
                    if (this.$ = t, this.location = i, this.globalConfig = e, this.isJobsiteBrandConfig = o, this.siteConfig = n, this.signedInMessage = "{0}{1} account", this.signOutMessage = "Not {0}? Sign out", this.sessionStorageKey = "accountDetails", this.clearSessionCacheCookieName = "GetAccountDetailsCacheClear", this.isJobsiteBrand = !1, this.context = null, this.sessionStorage = sessionStorage, this.$.isNullOrUndefined(t)) throw new Error("'$' was not specified.");
                    if (this.$.isNullOrUndefined(i)) throw new Error("'location' was not specified.");
                    this.$.isNullOrUndefined(o) || (this.isJobsiteBrand = o)
                }
                return t.reset = function() {
                    t.cachedAccountDetails = null, t.callbackQueue = null, t.cachedAuthDetails = null
                }, t.prototype.setSessionStorage = function(t) {
                    this.sessionStorage = t
                }, t.prototype.getAccountDetails = function(e) {
                    var o = this;
                    if (this.checkCacheControlCookieAndClearCacheIfPresent(), null == e) throw new Error("No callback was specified.");
                    if (null != t.cachedAccountDetails) return void e(t.cachedAccountDetails);
                    if (null !== this.sessionStorage.getItem(this.sessionStorageKey)) try {
                        var n = JSON.parse(this.sessionStorage.getItem(this.sessionStorageKey));
                        if (this.isActiveMemberId(n)) return t.cachedAccountDetails = n, void e(n);
                        this.sessionStorage.removeItem(this.sessionStorageKey)
                    } catch (a) {
                        this.sessionStorage.removeItem(this.sessionStorageKey)
                    }
                    if (null != t.callbackQueue) return void t.callbackQueue.push(e);
                    var r = this.getAccountDetailsUrl(),
                        s = this.$;
                    t.callbackQueue = [e], s.ajax({
                        url: r,
                        cache: !1,
                        dataType: "json",
                        success: function(i) {
                            t.cachedAccountDetails = i;
                            var e = i,
                                n = null != e.Firstname ? o.htmlEntities(e.Firstname) : e.Firstname;
                            e.Firstname = n, i.Firstname = e.Firstname, e.ValidUntilDate = Date.now() + 18e5, o.sessionStorage.setItem(o.sessionStorageKey, JSON.stringify(e));
                            var a = t.callbackQueue;
                            for (t.callbackQueue = null; a.length;) {
                                var r = a.pop();
                                r(i)
                            }
                            s(window).trigger("GetAccountDetailsComplete")
                        },
                        error: function() {
                            var e = {
                                    LoggedInState: i.NotLoggedIn,
                                    Firstname: null,
                                    MemberId: null,
                                    JobsiteMemberId: null
                                },
                                o = t.callbackQueue;
                            for (t.callbackQueue = null; o.length;) {
                                var n = o.pop();
                                n(e)
                            }
                        },
                        timeout: 3e4
                    })
                }, t.prototype.checkCacheControlCookieAndClearCacheIfPresent = function() {
                    var i = this,
                        e = this.getCookieValue(this.clearSessionCacheCookieName);
                    if (e) {
                        var o = new Date;
                        return o.setFullYear(o.getFullYear() - 1), document.cookie = this.clearSessionCacheCookieName + "=; expires=" + o.toUTCString() + "; path=/;", this.sessionStorage.removeItem(this.sessionStorageKey), void(t.cachedAccountDetails = null)
                    }
                    null == t.cachedAuthDetails && $.ajax({
                        url: "/candidate-auth/whoami",
                        async: !1,
                        cache: !1,
                        success: function(e) {
                            if (t.cachedAuthDetails = e, null !== i.sessionStorage.getItem(i.sessionStorageKey)) try {
                                var o = JSON.parse(i.sessionStorage.getItem(i.sessionStorageKey));
                                if (o.LoggedInState !== e.result.loggedInState) return i.sessionStorage.removeItem(i.sessionStorageKey), void(t.cachedAccountDetails = null)
                            } catch (n) {
                                i.sessionStorage.removeItem(i.sessionStorageKey), t.cachedAccountDetails = null
                            }
                        },
                        error: function() {
                            t.cachedAuthDetails = {
                                result: null,
                                errors: null,
                                succeeded: null
                            }
                        },
                        timeout: 3e4
                    })
                }, t.prototype.isActiveMemberId = function(t) {
                    return t.MemberId === this.getAnnoymousUserMemberId() && t.ValidUntilDate > Date.now()
                }, t.prototype.getAnnoymousUserMemberId = function() {
                    return document.cookie.replace(/(?:(?:^|.*;\s*)AnonymousUser\s*\=\s*([^;]*).*$)|^.*$/, "$1").split(/[=|&]+/)[1]
                }, t.prototype.getCookieValue = function(t) {
                    for (var i = t + "=", e = document.cookie.split(";"), o = 0; o < e.length; o++) {
                        var n = e[o].trim();
                        if (0 === n.indexOf(i)) return n.substring(i.length, n.length)
                    }
                    return ""
                }, t.prototype.setSignOutMessage = function(t, i) {
                    var e = this.$,
                        o = "Sign out";
                    e.emptyString(i) || (o = e.formatString(this.signOutMessage, i));
                    var n = t.find(".signout a");
                    n.html(o)
                }, t.prototype.setAccountMessage = function(t, i) {
                    var e, o = this.$,
                        n = "span";
                    if (o.emptyString(i)) e = o.formatString(this.signedInMessage, "Your", "");
                    else {
                        var a = o.endsWith(i, "s"),
                            r = a ? "&apos;" : "&apos;s";
                        e = o.formatString(this.signedInMessage, i, r)
                    }
                    var s = t.find("#navbar-personalisation-toggle " + n);
                    s.html(e)
                }, t.prototype.initialize = function(t, i) {
                    var e = this;
                    this.context = t, this.getAccountDetails(function(t) {
                        e.accountDetailsSuccessCallback(e, t), i()
                    })
                }, t.prototype.accountDetailsSuccessCallback = function(t, e) {
                    var o = this.$,
                        n = o("#navbar-header", t.context),
                        a = o("#navbar-personalisation-links", t.context),
                        r = "anonymous",
                        s = "logged-in";
                    if (!o.isNullOrUndefined(e)) switch (e.LoggedInState) {
                        case i.HardLogin:
                        case i.SoftLogin:
                            t.setAccountMessage(n, e.Firstname), t.setSignOutMessage(a, e.Firstname), n.addClass(s), n.removeClass(r);
                            break;
                        default:
                            n.removeClass(s), n.addClass(r)
                    }
                }, t.prototype.getAccountDetailsUrl = function() {
                    var t = this.globalConfig.AccountDetailsWebServiceUrl,
                        i = this.$.isNullOrUndefined;
                    if (!i(this.siteConfig) && !i(this.globalConfig.JobSeekerUrls)) {
                        var e = this.siteConfig.Site,
                            o = i(e) ? void 0 : this.globalConfig.JobSeekerUrls[e];
                        t = i(o) ? t : "https://" + o + t
                    }
                    return t
                }, t.prototype.htmlEntities = function(t) {
                    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\\/g, "&#x5c;")
                }, t.cachedAccountDetails = null, t.cachedAuthDetails = null, t.callbackQueue = null, t
            }();
        t.AccountDetails = e
    }(i = t.Header || (t.Header = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {
        var i = function() {
            function t(t, i, e, o, n) {
                if (this.localStorageKey = "searchOptions", this.$ = t, this.storage = i, this.querystring = e, this.config = o, this.siteConfig = n, this.$.isNullOrUndefined(t)) throw new Error("'$' was not specified.");
                if (this.$.isNullOrUndefined(i)) throw new Error("'storage' was not specified.");
                if (this.$.isNullOrUndefined(o)) throw new Error("'config' was not specified.");
                if (this.$.isNullOrUndefined(n)) throw new Error("'siteConfig' was not specified.");
                if (this.$.isNullOrUndefined(location)) throw new Error("'location' was not specified.")
            }
            return t.prototype.populateUsersPreviousSearchCriteria = function(t) {
                if (this.storage.isLocalStorageSupported() !== !1) {
                    var i = this.storage.getItem(this.localStorageKey);
                    if (null != i) {
                        var e = JSON.parse(i),
                            o = $(".search-keywords", $(t)),
                            n = $(".search-location-text", $(t)),
                            a = $(".search-locationsearchtype", $(t));
                        o.val(e.keywords), n.val(e.location), o.trigger("change"), n.trigger("change"), $.isNullOrUndefined(e.radius) === !1 && a.find('option[value="' + e.radius + '"]').length > 0 && a.val(e.radius), $.isNullOrUndefined(e.duration) === !1 && a.find('option[value="CTD_' + e.duration + '"]').length > 0 && a.val("CTD_" + e.duration)
                    }
                }
            }, t.prototype.initialize = function(t) {
                this.storage.isLocalStorageSupported() !== !1 && (this.storeSearchOptionsFromQueryString(), this.populateUsersPreviousSearchCriteria(t))
            }, t.prototype.getSearchOptionsFromQueryString = function() {
                var t = this.querystring.getQueryStringParameters();
                return {
                    keywords: t.keywords,
                    location: t.ltxt,
                    radius: t.radius,
                    duration: t.duration
                }
            }, t.prototype.storeSearchOptionsFromQueryString = function() {
                var t = this.getSearchOptionsFromQueryString(),
                    i = this.storage.getItem(this.localStorageKey),
                    e = $.isNullOrUndefined(i) ? {} : JSON.parse(i),
                    o = !($.isNullOrUndefined(t.keywords) && $.isNullOrUndefined(t.location) && $.isNullOrUndefined(t.radius) && $.isNullOrUndefined(t.duration));
                if (!o) return !1;
                var n = !1;
                if (t.keywords !== e.keywords && (e.keywords = t.keywords, n = !0), t.location !== e.location && (e.location = t.location, n = !0), t.radius !== e.radius && (e.radius = t.radius, n = !0), t.duration !== e.duration && (e.duration = t.duration, n = !0), n) {
                    var a = JSON.stringify(e);
                    this.storage.setItem(this.localStorageKey, a)
                }
                return n
            }, t
        }();
        t.SearchOptions = i
    }(i = t.Header || (t.Header = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup = TotalJobsGroup || {};
TotalJobsGroup.Header = TotalJobsGroup.Header || {}, TotalJobsGroup.Config = TotalJobsGroup.Config || {}, TotalJobsGroup.Config.Global = TotalJobsGroup.Config.Global || {}, TotalJobsGroup.Header.UserAgent = TotalJobsGroup.Header.UserAgent || {}, TotalJobsGroup.Header.AutoCompleteService = TotalJobsGroup.Header.AutoCompleteService || {}, TotalJobsGroup.Header.SearchAutoComplete = function(t, i, e, o) {
    "use strict";

    function n(t) {
        I = t
    }

    function a(t) {
        w = t
    }

    function r(t) {
        C = t
    }

    function s(t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }

    function c(t, i) {
        var e = i.split(" ").join("|");
        return e = s(e), t.replace(new RegExp("(" + e + ")", "gi"), "<b>$1</b>")
    }

    function l(i) {
        var e = I.KeywordsAutoSuggestMaxResults;
        void 0 !== w && t.isFunction(w.isMobileScreenWidth) && w.isMobileScreenWidth() === !0 && (e = I.KeywordsAutoSuggestMaxResultsMobile);
        var o = t(O, i).autocomplete({
            position: {
                my: "left top",
                at: "left bottom"
            },
            delay: I.KeywordsAutoSuggestDelayMilliseconds,
            minLength: 2,
            source: function(i, o) {
                var n = {
                    value: i.term,
                    MaxResults: e
                };
                C.search({
                    url: I.KeywordsAutoSuggestUrl,
                    data: n,
                    successCallback: function(e) {
                        null !== e.Results && 0 !== e.Results.length && o(t.map(e.Results, function(t) {
                            return {
                                value: t.DisplayString,
                                type: t.Type,
                                term: i.term
                            }
                        }))
                    }
                })
            },
            open: function(t, i) {},
            select: function(t, i) {
                p(i.item.type), v(i.item.type)
            }
        });
        o.data("ui-autocomplete")._renderItem = function(i, e) {
            return t('<li class="ui-menu-item" role="presentation"></li>').append("<a>" + c(e.value, e.term) + '<span class="autocomplete-type">' + e.type + "</span></a>").appendTo(i)
        }
    }

    function u(i) {
        var e = "KEYWORD",
            o = 38,
            n = 40,
            a = 13;
        i.which !== n && i.which !== o && i.which !== a && (t.isNullOrUndefined(J) || "" === J.val() || A.val(e), t.isNullOrUndefined(D) || "" === D.val() || A.val(e), t.isNullOrUndefined(P) || "" === P.val() || A.val(e))
    }

    function f() {
        A.val("")
    }

    function d() {
        t.isNullOrUndefined(J) || "" !== J.val() || D.is(":hidden") || f(), t.isNullOrUndefined(D) || "" !== D.val() || D.is(":hidden") || f(), t.isNullOrUndefined(P) || "" !== P.val() || P.is(":hidden") || f()
    }

    function p(t) {
        A.val(t)
    }

    function h(i, e) {
        var o = 2;
        if ("string" === t.type(i)) {
            var n = i.length;
            n >= o ? e.show() : e.hide()
        }
    }

    function g(i) {
        function e(e, o) {
            o.item && null != o && t(L, i).val(o.item.value)
        }
        t.widget("custom.extend_autocomplete", t.ui.autocomplete, {
            _create: function() {
                this._super(), this.widget().menu("option", "items", "> :not(.ui-autocomplete-header)")
            },
            _renderMenu: function(i, e) {
                var o = this,
                    n = t('<div class="ui-autocomplete-header"></div>');
                this.options.showHeader && (n.append("<span>" + this.options.headerText + "</span>"), i.append(n)), t.each(e, function(t, e) {
                    o._renderItemData(i, e)
                })
            },
            _renderItemData: function(t, i) {
                return this._renderItem(t, i).data("ui-autocomplete-item", i)
            },
            _renderItem: function(i, e) {
                var o = "";
                return o = t("<li>", {
                    "class": "ui-menu-item",
                    role: "presentation"
                }).append("<a>" + c(e.value, e.term) + "<div></div></a>").appendTo(i)
            }
        });
        var o = I.LocationMaxResults;
        void 0 !== w && t.isFunction(w.isMobileScreenWidth) && w.isMobileScreenWidth() === !0 && (o = I.LocationMaxResultsMobile);
        t(L, i).extend_autocomplete({
            position: {
                my: "left top",
                at: "left bottom"
            },
            delay: I.LocationDelayMilliseconds,
            focus: e,
            minLength: 2,
            showHeader: S(),
            headerText: "Add postcode for commute time",
            source: function(i, e) {
                var n = {
                    lookupText: i.term,
                    numberOfResults: o
                };
                C.search({
                    url: I.LocationWebServiceUrl,
                    data: n,
                    successCallback: function(o) {
                        null !== o.d.Items && 0 !== o.d.Items.length && e(t.map(o.d.Items, function(t) {
                            return {
                                value: t,
                                term: i.term
                            }
                        }))
                    }
                })
            },
            open: function(t, i) {},
            close: function() {
                if (void 0 !== w && t.isFunction(w.isMobileSafari) && w.isMobileSafari() === !0 && (t(L).val().length > 20 && t(".clear-location", i).hide(), t(L).focus()), S() && b(t(L, i).val()) && 0 !== t(E, i).val().lastIndexOf("CTD_", 0)) {
                    var e = "CTD_45";
                    t(E, i).find("option").each(function() {
                        this.value === e && t(E, i).val(e)
                    })
                }
            }
        })
    }

    function m(i) {
        var e = t(".clear-keywords", i),
            o = t(".clear-location", i);
        e.click(function() {
            h(t(this).val(), e), t(".ui-autocomplete", i).hide(), t(O, i).val("").focus()
        }), o.click(function() {
            h(t(this).val(), o), t(".ui-autocomplete", i).hide(), o.hide(), t(L, i).val("").focus()
        }), void 0 !== w && t.isFunction(w.isMobileSafari) && w.isMobileSafari() === !0 && (t(O, i).on("keyup change", function() {
            h(t(this).val(), e)
        }), t(L, i).on("keyup change", function() {
            h(t(this).val(), o)
        }))
    }

    function y() {
        var t = new Object;
        t.type = A.val(), sessionStorage.setItem("searchType", JSON.stringify(t))
    }

    function v(t) {
        sessionStorage.setItem("searchType", JSON.stringify({
            type: t
        }))
    }

    function S() {
        var i = TotalJobsGroup.Config.Global.CommuteTimeSearchEnabledSites,
            e = TotalJobsGroup.Config.Site.Site;
        return t.inArray(e, i) > -1
    }

    function b(t) {
        var i = new RegExp(/^([A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?)\s?([0-9][A-Za-z]{2})?$/),
            e = t.split(/,/)[0].trim(),
            o = i.exec(e);
        return !(!o || o.length < 1)
    }

    function T(i) {
        t.fn.autocomplete && (l(i), g(i), m(i))
    }

    function N() {
        var i = new Object;
        null !== sessionStorage.getItem("searchType") && (i = JSON.parse(sessionStorage.getItem("searchType")), t.isNullOrUndefined(i.type) || A.val(i.type))
    }

    function k() {
        t(document).ready(function() {
            void 0 !== A.val() && N(), t(".navbar-site-search-bar").each(function(i, e) {
                T(t(e))
            }), t(O).keyup(function(t) {
                u(t)
            }), t(O).change(function() {
                d()
            }), t(O).submit(function() {
                d()
            }), t(".search-submit-button").click(function() {
                y()
            })
        })
    }
    var I, w, C, O = ".search-keywords",
        L = ".search-location-text",
        E = ".search-locationsearchtype",
        J = t("#header-desktop-search-keywords"),
        D = t("#header-mobile-search-keywords"),
        P = t(".homepage-what #keywords"),
        A = t(".search-keyword-type");
    n(i), a(e), r(o);
    try {
        k()
    } catch (M) {}
    return {
        setAutoCompleteService: r,
        setGlobalConfig: n,
        setUserAgent: a,
        initialize: T
    }
}(jQuery, TotalJobsGroup.Config.Global, TotalJobsGroup.Header.UserAgent, TotalJobsGroup.Header.AutoCompleteService);
var TotalJobsGroup = TotalJobsGroup || {};
TotalJobsGroup.Header = TotalJobsGroup.Header || {}, TotalJobsGroup.Header.RedirectUrlUpdater = function(t, i) {
    function e(i) {
        var e = i.find(s),
            o = i.find(c),
            a = t.merge(e, o);
        t.each(a, function(i, e) {
            var o = t(e).attr("href");
            o += (/\?/.test(o) ? "&" : "?") + "ReturnUrl=" + n(), t(e).attr("href", o)
        })
    }

    function o(t) {
        r = t
    }

    function n() {
        var i = "";
        if (t.isNullOrUndefined(r.pathname) === !1 && (i = r.pathname), /\/Authenticated\//i.test(i)) return "/";
        if (/\/account\/signin/i.test(i)) return "/";
        var e = r.search;
        return null !== e && (i += encodeURIComponent(e)), i
    }

    function a() {
        t(document).ready(function() {
            e(t("div.navigation")), e(t("footer"))
        })
    }
    var r = i || {
            pathname: "",
            search: ""
        },
        s = "a.signin-link",
        c = "a.signout-link";
    try {
        a()
    } catch (l) {}
    return {
        init: a,
        setLocation: o,
        updateLinkQuerystrings: e
    }
}(jQuery, window.location);
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {
        var i = function() {
            function t(t, i, e) {
                if (this.$ = t, this.headerAnalytics = i, this.getInstanceFunction = e, this.$.isNullOrUndefined(t)) throw new Error("'$' was not specified.");
                if (this.$.isNullOrUndefined(i)) throw new Error("'headerAnalytics' was not specified.");
                if (this.$.isNullOrUndefined(e)) throw new Error("'getInstanceFunction' was not specified.")
            }
            return t.prototype.replaceVariables = function(t) {
                var i = this.$;
                return i.isString(t) ? t.replace(/\$current_page/g, this.headerAnalytics.getCurrentPageName()) : t
            }, t.prototype.sendTrackingInfo = function(t) {
                var i = this.$,
                    e = this.getInstanceFunction(this.headerAnalytics.getSiteId());
                if (!i.isNullOrUndefined(e)) {
                    var o = t.data("tracking-properties"),
                        n = [];
                    for (var a in o) o.hasOwnProperty(a) && (e[a] = this.replaceVariables(o[a]), n.push(a));
                    var r = t.data("tracking-event-variables");
                    for (var s in r) r.hasOwnProperty(s) && (e[s] = this.replaceVariables(r[s]), n.push(s));
                    e.linkTrackVars = n.join(","), e.linkTrackEvents = t.data("tracking-link-track-events"), e.events = t.data("tracking-event-names");
                    var c = !0;
                    t.is("a") && (c = t.get(0)), e.tl(c, "o", t.data("tracking-event-description"))
                }
            }, t.prototype.initialize = function(t) {
                var i = this.$,
                    e = this,
                    o = function(t, o) {
                        i(o).on("click", function() {
                            e.sendTrackingInfo(i(this))
                        })
                    };
                i(".tracking", t).each(o)
            }, t
        }();
        t.Tracking = i
    }(i = t.Header || (t.Header = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {
        var i = function() {
            function t(t, i) {
                this.$ = t, this.tracking = i
            }
            return t.prototype.sendTrackingEventForElement = function(t, i) {
                i ? t.data("tracking-event-description", t.data("tracking-toggle-open-event-description")) : t.data("tracking-event-description", t.data("tracking-toggle-close-event-description")), this.tracking.sendTrackingInfo(t)
            }, t.prototype.initialize = function(t) {
                var i = this.$,
                    e = this,
                    o = function(o, n) {
                        var a = i(n),
                            r = a.data("target");
                        if (!i.isNullOrUndefined(r)) {
                            var s = t.find(r);
                            0 !== s.length && (s.on("shown.bs.collapse", function() {
                                e.sendTrackingEventForElement(a, !0)
                            }), s.on("hidden.bs.collapse", function() {
                                e.sendTrackingEventForElement(a, !1)
                            }))
                        }
                    };
                i(".toggle-tracking", t).each(o)
            }, t
        }();
        t.ToggleTracking = i
    }(i = t.Header || (t.Header = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {
        var i = function() {
            function t(t, i, e, o) {
                this.$ = t, this.location = i, this.analytics = e, this.analyticsLibrary = o
            }
            return t.prototype.getCurrentAnalyticsPageName = function() {
                return this.$.isNullOrUndefined(this.analytics.PageName) ? "" : this.analytics.PageName
            }, t.prototype.getCurrentPageName = function() {
                var t = this.getCurrentAnalyticsPageName();
                return 0 === t.length && (t = this.location.pathname), t
            }, t.prototype.getSiteId = function() {
                return this.analyticsLibrary.getSiteId()
            }, t
        }();
        t.Analytics = i
    }(i = t.Header || (t.Header = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {
        var i = function() {
            function t(t, i, e) {
                if (null == t) throw new Error("'$' was not specified.");
                if (this.$ = t, this.$.isNullOrUndefined(i)) throw new Error("'location' was not specified.");
                if (this.$.isNullOrUndefined(e)) throw new Error("'headerAnalytics' was not specified.");
                this.location = i, this.headerAnalytics = e
            }
            return t.prototype.getRedirectUrl = function(t) {
                var i = this.$,
                    e = {
                        s: "header"
                    },
                    o = {
                        Keywords: i(".search-keywords", t).val(),
                        LTxt: i(".search-location-text", t).val()
                    },
                    n = i(".search-locationsearchtype", t).val();
                "undefined" != typeof n && (0 === n.toString().lastIndexOf("CTD_", 0) ? o.duration = i(".search-locationsearchtype", t).val().toString().replace("CTD_", "") : o.radius = i(".search-locationsearchtype", t).val().toString()), i.each(o, function(t, o) {
                    if (!i.isNullOrUndefined(o) && o.length > 0) {
                        var n = {};
                        n[t] = o, i.extend(e, n)
                    }
                });
                var a = "/onsitesearch?";
                return a + i.param(e)
            }, t.prototype.redirectToResultsPage = function(t) {
                var i = this.getRedirectUrl(t);
                this.location.href = i
            }, t.prototype.performSearch = function(t) {
                var i = t.closest(".navbar-search-container");
                this.redirectToResultsPage(i)
            }, t.prototype.initialize = function(t) {
                var i = this,
                    e = this.$;
                e(".search-submit-button", t).on("click", function(t) {
                    i.performSearch(e(t.target))
                }), e(".search-keywords,.search-location-text", t).on("keydown", function(t) {
                    13 === t.which && i.performSearch(e(t.target))
                })
            }, t
        }();
        t.Search = i
    }(i = t.Header || (t.Header = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {
        var i = function() {
            function t(t) {
                this.doc = t || window.document
            }
            return t.prototype.getCookieValue = function(t) {
                var i = this.doc.cookie.match("(^|;)\\s*" + encodeURIComponent(t) + "\\s*=\\s*([^;]*)");
                return i ? i.pop() : null
            }, t.prototype.setCookieValue = function(t, i, e, o) {
                var n = encodeURIComponent(t) + "=" + encodeURIComponent(i);
                e && (n += "; expires=" + e.toUTCString()), o || (o = "/"), n += "; path=" + o, this.doc.cookie = n
            }, t
        }();
        t.Cookies = i
    }(i = t.Header || (t.Header = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {
        var i = function() {
            function t(t) {
                this.location = t
            }
            return t.prototype.getQueryStringParameterValue = function(t) {
                return $.isNullOrUndefined(t) || (t = t.toLowerCase()), this.getQueryStringParameters()[t]
            }, t.prototype.getQueryStringParameters = function() {
                var t, i = /([^&=]+)=([^&]+)/g,
                    e = function(t) {
                        return decodeURIComponent(t.replace(/\+/g, " "))
                    },
                    o = this.location.search.slice(this.location.search.indexOf("?") + 1),
                    n = {};
                do t = i.exec(o), t && (n[e(t[1]).toLowerCase()] = e(t[2])); while (t);
                return n
            }, t
        }();
        t.QueryString = i
    }(i = t.Header || (t.Header = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup;
! function(t) {}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {}(i = t.Config || (t.Config = {}))
}(TotalJobsGroup || (TotalJobsGroup = {}));
var TotalJobsGroup;
! function(t) {
    var i;
    ! function(t) {}(i = t.RecentSearches || (t.RecentSearches = {}))
}(TotalJobsGroup || (TotalJobsGroup = {})), $(document).ready(function() {
    function t(t) {
        if (console && "function" == typeof console.log) try {
            console.log(t)
        } catch (i) {}
    }

    function i(i, e) {
        t(i + " " + e.message)
    }
    var e = null,
        o = null;
    try {
        o = new TotalJobsGroup.Header.QueryString(window.location)
    } catch (n) {
        i("Failed to initialise Header.Querystring.", n)
    }
    try {
        var a = new TotalJobsGroup.Header.SearchOptions(jQuery, TotalJobsGroup.localStorage, o, TotalJobsGroup.Config.Global, TotalJobsGroup.Config.Site);
        a.initialize($("body"))
    } catch (r) {
        i("Failed to initialise Header.SearchOptions.", r)
    }
    try {
        TotalJobsGroup.RecentSearches.DropdownRenderer.renderDropdown($("#navbar-desktop-recent-search-container"), $("#header-desktop-search-keywords"), $("#header-desktop-search-location-text"))
    } catch (s) {
        i("Failed to initialise recent search UI.", s)
    }
    try {
        TotalJobsGroup.RecentSearches.DropdownRenderer.renderDropdown($("#navbar-mobile-keywords-recent-search-container"), $("#header-mobile-search-keywords"))
    } catch (s) {
        i("Failed to initialise recent search UI.", s)
    }
    try {
        TotalJobsGroup.RecentSearches.DropdownRenderer.renderDropdown($("#navbar-mobile-location-recent-search-container"), $("#header-mobile-search-location"))
    } catch (s) {
        i("Failed to initialise recent search UI.", s)
    }
    try {
        var c = new TotalJobsGroup.Header.AccountDetails(jQuery, window.location, TotalJobsGroup.Config.Global, TotalJobsGroup.IsJobsiteBrand);
        c.initialize($("body"), function() {})
    } catch (l) {
        i("Failed to initialise Header.AccountDetails.", l)
    }
    try {
        e = new TotalJobsGroup.Header.Analytics(jQuery, window.location, analytics, analLib)
    } catch (u) {
        i("Failed to initialise Header.Analytics.", u)
    }
    try {
        var f = new TotalJobsGroup.Header.Search(jQuery, window.location, e);
        f.initialize($("body"))
    } catch (d) {
        i("Failed to initialise Header.Search.", d)
    }
    var p = null;
    try {
        var h = p = new TotalJobsGroup.Header.Tracking(jQuery, e, s_gi);
        h.initialize($("body"))
    } catch (g) {
        i("Failed to initialise Header.Tracking.", g)
    }
    try {
        var m = new TotalJobsGroup.Header.ToggleTracking(jQuery, p);
        m.initialize($("body"))
    } catch (y) {
        i("Failed to initialise Header.ToggleTracking.", y)
    }
    try {
        var v = new TotalJobsGroup.Header.Toggles(jQuery);
        v.initialize()
    } catch (S) {
        i("Failed to initialise Header.Toggles.", S)
    }
    var b = null;
    try {
        b = new TotalJobsGroup.Header.Cookies
    } catch (T) {
        i("Failed to initialise Header.Cookies.", T)
    }
});
var NotificationIconState = {
        OUTLINE: 0,
        FILLED: 1,
        FILLEDWITHDOT: 2
    },
    NotificationType = {
        RECOMMENDEDJOB: "Recommended Job",
        JBEUPDATE: "JBE Update"
    },
    SourceOfNotification = {
        POPUPPANEL: "aoqsnptrzefyws",
        NOTIFICATIONPAGE: "borsmpuraegyxs"
    },
    desktopDiv = "navbar-desktop-nc-toggle",
    mobileDiv = "navbar-mobile-nc-toggle",
    notificationsMobilePanel = "notificationsMobilePanel",
    notificationHeaderHeight = 80,
    desktopNotificationPageUrl = "/notifications",
    NotificationsABTestSegments = {
        CONTROL: 0,
        TEST: 1
    },
    tempNotificationsTracker, queryStringParameterNameForTheSourceOfNotification = "src_notifications",
    notificationsModel = new NotificationsModel,
    notificationsTracker = new NotificationsTracker(queryStringParameterNameForTheSourceOfNotification),
    eVar144Value = notificationsTracker.checkAndTrackIfNotificationsListIsSourceOfJobClickAndOnJobDetailsPage(),
    recommenderJobsScraper = new RecommenderJobsScraper,
    jBEUpdateNotificationCreater = new JbeUpdateNotificationCreater,
    notificationsIconDisplayer = new NotificationsIconDisplayer(desktopDiv, mobileDiv),
    notificationsIconStateManager = new NotificationsIconStateManager,
    notificationsIconStateStorer = new NotificationsIconStateStorer,
    notificationsListDisplayer = new NotificationsListDisplayer(notificationsMobilePanel, desktopNotificationPageUrl, "notificationsTracker"),
    notificationsListManager = new NotificationsListManager,
    notificationsListLocalStorer = new NotificationsListLocalStorer,
    notificationsController = new NotificationsController;
$(function() {
    desktopDiv = "#" + desktopDiv, mobileDiv = "#" + mobileDiv, notificationsController.fetchModelFromStorageAndPageProperties(), notificationsController.addNewNotifications(jBEUpdateNotificationCreater.generateJbeUpdateNotificationsIfQualifies(notificationsModel.notificationItemList)), notificationsController.pageView(), $(window).on("load", function() {
        setTimeout(function() {
            return notificationsController.addNewNotifications(recommenderJobsScraper.scrapeJobs()), notificationsController.pageView(), !0
        }, 2e3)
    }), $(notificationsIconDisplayer.iconParentIdsSelector).on("click", function() {
        notificationsController.iconClicked(), notificationsController.iconPoweredPanelView()
    }), $("body").on("click", function() {
        notificationsController.documentOrGlyphonClick(!1)
    }), $(".notification-button-close").on("click", function() {
        notificationsController.documentOrGlyphonClick(!0)
    }), $(".nc-container, .notification-mobile-container, .nc-container, .notification-mobile-container").click(function(t) {
        t.stopPropagation()
    })
});
var myaNameSpace = myaNameSpace || {};
myaNameSpace.addMyaTracking = function() {
    function t(t) {
        document.removeEventListener(t, l, !1)
    }
    window.StStEvents = window.StStEvents || {}, window.StStEvents.publish = window.StStEvents.publish || function(t, i) {
        const e = "undefined" == typeof i ? new Event(t) : new CustomEvent(t, {
            detail: i
        });
        document.dispatchEvent(e)
    };
    const i = [{
            name: "MYA.WIDGET.BOOTED",
            domEvent: "MYA.WIDGET.BOOTED",
            target: document,
            adobeEvent: "event988",
            trackOnce: !1,
            linkedEvent: [],
            eVarsList: [1, 23, 30, 223],
            sourceName: ""
        }, {
            name: "MYA.WIDGET.EXPANDED",
            domEvent: "MYA.WIDGET.EXPANDED",
            target: document,
            adobeEvent: "event998",
            trackOnce: !0,
            linkedEvent: [],
            eVarsList: [1, 23, 30, 223],
            sourceName: ""
        }, {
            name: "MYA.USER.MESSAGE.SUBMITTED",
            domEvent: "MYA.USER.MESSAGE.SUBMITTED",
            target: document,
            adobeEvent: "event999",
            trackOnce: !0,
            linkedEvent: ["MYA.CONVERSATION.BUTTON.CLICKED"],
            eVarsList: [1, 23, 30, 223],
            sourceName: ""
        }, {
            name: "MYA.CONVERSATION.BUTTON.CLICKED",
            domEvent: "MYA.CONVERSATION.BUTTON.CLICKED",
            target: document,
            adobeEvent: "event999",
            trackOnce: !0,
            linkedEvent: ["MYA.USER.MESSAGE.SUBMITTED"],
            eVarsList: [1, 23, 30, 223],
            sourceName: ""
        }],
        e = function() {
            r(i), "complete" === document.readyState ? o() : window.addEventListener("load", o)
        },
        o = function() {
            const t = [];
            a(t), n(t), r(t), a(i)
        },
        n = function(t) {
            t.forEach(function(t) {
                $("#" + t.name).off()
            })
        },
        a = function(t) {
            t.push({
                name: "JobToolsTop_AOLOptions_lnkApplyOnline",
                domEvent: "click",
                target: document.getElementById("JobToolsTop_AOLOptions_lnkApplyOnline"),
                adobeEvent: "event28".concat("First Party" === s.eVar7 ? ",event35" : ""),
                trackOnce: !0,
                linkedEvent: [],
                eVarsList: [1, 7, 23, 190, 223],
                sourceName: "Top_Button"
            }), t.push({
                name: "JobToolsBottom_AOLOptions_lnkApplyOnline",
                domEvent: "click",
                target: document.getElementById("JobToolsBottom_AOLOptions_lnkApplyOnline"),
                adobeEvent: "event28".concat("First Party" === s.eVar7 ? ",event35" : ""),
                trackOnce: !0,
                linkedEvent: [],
                eVarsList: [1, 7, 23, 190, 223],
                sourceName: "Bottom_Button"
            })
        },
        r = function(t) {
            t.forEach(function(t) {
                c(t)
            })
        },
        c = function(t) {
            void 0 !== typeof t && null !== t.target && t.target.addEventListener(t.domEvent, l, !!t.trackOnce && {
                once: !0
            })
        },
        l = function(t) {
            u(t), f(t)
        },
        u = function(t) {
            const i = p("click" == t.type ? t.target.id : t.type);
            if (void 0 !== typeof s) {
                i.sourceName && (s.eVar190 = i.sourceName), s.linkTrackVars = i.eVarsList.map(function(t) {
                    return "eVar" + t
                }).join(",");
                var e = i.adobeEvent;
                s.linkTrackEvents = e, s.events = e, s.tl(!0, "o", d(i))
            } else console.log("AppMeasurement not ready or found!")
        },
        f = function(i) {
            const e = p("click" == i.type ? i.target.id : i.type);
            e.trackOnce && (t(e.name), e.linkedEvent.forEach(function(i) {
                t(i)
            }))
        },
        d = function(t) {
            return "click" === t.domEvent ? "Click on Apply" : t.domEvent
        },
        p = function(t) {
            return i.filter(function(i) {
                return i.name === t
            })[0]
        };
    e()
}, myaNameSpace.trackMyaApplyBtnCllBck = function() {
    console.log("Application button clicked!");
    const t = {
        name: "Mya Click on Apply",
        adobeEvent: "",
        eVarsList: [1, 7, 23, 190, 223],
        eventsList: [28]
    };
    if (void 0 !== typeof s) {
        const i = t.eVarsList.map(function(t) {
            return "eVar" + t
        }).join(",");
        s.linkTrackVars = i + ",events";
        var e = t.eventsList.map(function(t) {
            return "event" + t
        }).join(",");
        "First Party" === s.eVar7 && (e += ",event35"), s.eVar190 = "Mya_Button", s.linkTrackEvents = e, s.events = e, s.tl(!0, "o", t.name)
    } else console.log("AppMeasurement not ready or found!");
    const o = document.getElementById("jobId");
    o && window.location.replace("/job/" + o.value + "/apply")
};
var myaNameSpace = myaNameSpace || {};
myaNameSpace.audSeg = myaNameSpace.audSeg || {},
    function(t) {
        const i = function(t) {
                fetch("/candidate-auth/whoami").then(function(t) {
                    return t.json()
                }).then(function(i) {
                    t.loggedIn = null != i && i.hasOwnProperty("result") && i.result.hasOwnProperty("loggedInState") && i.result.loggedInState > 0
                })["catch"](function() {
                    console.log("audience segmentation error")
                })
            },
            e = function() {
                return window.matchMedia("(min-width: 767px)").matches
            },
            o = function(t) {
                "complete" == document.readyState ? n(t) : document.addEventListener("DOMContentLoaded", function(i) {
                    n(t)
                })
            },
            n = function(t) {
                const i = document.getElementById("jobId");
                try {
                    t.jobId = i ? parseInt(i.value) : 0
                } catch (e) {
                    t.jobId = 0
                }
            };
        t.isDesktop = e(), i(t), o(t)
    }(myaNameSpace.audSeg);
var myaNameSpace = myaNameSpace || {};
myaNameSpace.myaDisplayService = function() {
    const t = function(t) {
            i() ? e(t) : o(t)
        },
        i = function() {
            return "undefined" == typeof mya
        },
        e = function(t) {
            const i = document.createElement("script");
            i.type = "text/javascript", document.body.appendChild(i), i.onload = function() {
                o(t)
            }, i.src = "/mya/cse/widget.js"
        },
        o = function(t) {
            const i = n(t),
                e = {
                    tenant: i.myaEnv,
                    blueprint: i.myaBlueprint,
                    start: a(t.displayExpanded),
                    theme: "totaljobs",
                    newConversation: !0,
                    tooltip: t.header,
                    themeOverwrite: {
                        header: {
                            text: t.header
                        }
                    },
                    style: {
                        iconPositionY: "bottom"
                    },
                    data: {
                        site_id: t.siteId,
                        conversation_group: t.variant,
                        job: {
                            cta_send_application: t.ctaSendApplication,
                            job_id: t.jobId
                        }
                    }
                };
            mya("boot", e)
        },
        n = function(t) {
            const i = [{
                regex: "totaljobs",
                myaEnv: "mya",
                myaBlueprint: t.productionBlueprint
            }, {
                regex: "tjgdev",
                myaEnv: "myastaging",
                myaBlueprint: t.devBlueprint
            }, {
                regex: "tjgpat",
                myaEnv: "mya",
                myaBlueprint: t.patBlueprint
            }];
            return i.reduce(function(t, i) {
                return window.location.host.includes(i.regex) ? i : t
            })
        },
        a = function(t) {
            return t ? "expanded" : "minimized"
        };
    return {
        OptimizelyTestDisplay: t
    }
}();
var ccuidStorerNameSpace = ccuidStorerNameSpace || {};
ccuidStorerNameSpace.ccuidQueryStringStorer = function() {
    const t = function() {
            var t = window.location.pathname.toLowerCase();
            return "/salary-planner" == t || "/salary-checker/salary-calculator" == t
        },
        i = function() {
            const t = new URLSearchParams(window.location.search.toLowerCase());
            if (t.has("ccuid")) return t.get("ccuid")
        },
        e = function(t) {
            sessionStorage.setItem("ccuid", t)
        },
        o = t();
    if (o) {
        const n = i();
        null != n && "" != n && e(n)
    }
    const a = function(t) {
            var i = s_gi(analLib.getSiteId());
            i.linkTrackVars = i.linkTrackVars.indexOf("eVar165") != -1 ? i.linkTrackVars : i.linkTrackVars + ",eVar165", i.eVar165 = sessionStorage.getItem("ccuid"), i.tl(this, "o", t)
        },
        r = function() {
            const t = function() {
                return "/account/register" == window.location.pathname.toLowerCase() && void a("submit button click")
            };
            var i = sessionStorage.getItem("ccuid");
            null !== document.getElementById("frmMain") && void 0 !== i && null !== i && document.getElementById("frmMain").addEventListener("submit", t)
        },
        s = function() {
            const t = function() {
                a("on dom content load")
            };
            var i = sessionStorage.getItem("ccuid");
            void 0 !== i && null !== i && document.addEventListener("DOMContentLoaded", t)
        };
    r(), s()
}();
//# sourceMappingURL=headerfooter.js.map