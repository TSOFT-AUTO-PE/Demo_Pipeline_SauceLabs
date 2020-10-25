package com.tsoft.bot.saucelabs.android.Tests;

import com.tsoft.bot.saucelabs.android.Pages.PageObject_TSOFT;
import org.openqa.selenium.By;
import org.openqa.selenium.InvalidElementStateException;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

import java.lang.reflect.Method;
import java.net.MalformedURLException;
import java.rmi.UnexpectedException;

import static com.tsoft.bot.saucelabs.android.Pages.PageObject_TSOFT.*;

/**
 * Created by mehmetgerceker on 12/7/15.
 * Updated by spider@saucelabs.com on 10/8/19.
 */

public class DemoTsoftTest extends TestBase {

    private PageObject_TSOFT pageObject_tsoft;

    /**
     * Runs a simple test verifying link can be followed.
     *
     * @throws InvalidElementStateException
     */
    @Test(dataProvider = "hardCodedBrowsers")
    public void TSOFT_Test_APK_Login(String platformName,
                               String deviceName,
                               String platformVersion,
                               String appiumVersion,
                               String deviceOrientation,
                               Method method)
            throws MalformedURLException, InvalidElementStateException, UnexpectedException, InterruptedException {

        //create webdriver session
        this.createDriver(platformName, deviceName, platformVersion, appiumVersion, deviceOrientation, method.getName());
        WebDriver driver = this.getAndroidDriver();
        pageObject_tsoft.Flujo_Prueba();

    }

}