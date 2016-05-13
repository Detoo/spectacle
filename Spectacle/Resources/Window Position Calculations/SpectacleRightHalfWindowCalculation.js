windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneHalfRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneHalfRect.width = Math.floor(oneHalfRect.width / 2.0);
    oneHalfRect.x += oneHalfRect.width;
    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(oneHalfRect)) <= 1.0) {
        var twoThirdRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        twoThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);
        twoThirdRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - twoThirdRect.width;
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneHalfRect, windowRect)) {
            return twoThirdRect;
        }
        var threeFourthRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        threeFourthRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 3.0 / 4.0);
        threeFourthRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - threeFourthRect.width;
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(twoThirdRect, windowRect)) {
            return threeFourthRect;
        }
        var oneFourthRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneFourthRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 4.0);
        oneFourthRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - oneFourthRect.width;
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(threeFourthRect, windowRect)) {
            return oneFourthRect;
        }
        var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
        oneThirdsRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - oneThirdsRect.width;
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneFourthRect, windowRect)) {
            return oneThirdsRect;
        }
    }
    return oneHalfRect;
}, "SpectacleWindowActionRightHalf");
