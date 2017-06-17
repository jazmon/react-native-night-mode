
package com.attehuhtakangas.nightmode;

import android.app.UiModeManager;
import android.content.Context;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Collections;
import java.util.Map;

public class NightModeModule extends ReactContextBaseJavaModule {

    public NightModeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "nightmodeManager";
    }


    @Override
    public
    @Nullable
    Map<String, Object> getConstants() {
        return Collections.emptyMap();
    }

    @ReactMethod
    public String isNightMode() {
        final Context context = getReactApplicationContext();
        UiModeManager manager = (UiModeManager) context.getSystemService(Context.UI_MODE_SERVICE);
        switch (manager.getNightMode()) {
            case UiModeManager.MODE_NIGHT_AUTO:
                return "AUTO";
            case UiModeManager.MODE_NIGHT_NO:
                return "NO";
            case UiModeManager.MODE_NIGHT_YES:
                return "YES";
            default:
                return null;
        }
    }

    @ReactMethod
    public void setNightMode(String mode) {
        final Context context = getReactApplicationContext();
        UiModeManager manager = (UiModeManager) context.getSystemService(Context.UI_MODE_SERVICE);
        int currentMode = manager.getNightMode();
        switch (mode.toUpperCase()) {
            case "YES":
                if (currentMode == UiModeManager.MODE_NIGHT_YES) return;
                manager.setNightMode(UiModeManager.MODE_NIGHT_YES);
            case "NO":
                if (currentMode == UiModeManager.MODE_NIGHT_NO) return;
                manager.setNightMode(UiModeManager.MODE_NIGHT_NO);
            case "AUTO":
                if (currentMode == UiModeManager.MODE_NIGHT_AUTO) return;
                manager.setNightMode(UiModeManager.MODE_NIGHT_AUTO);
            default:
                return;
        }
    }
}