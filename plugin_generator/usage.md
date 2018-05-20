# Compiling plugins from code

### Requirements

* A copy of the `PluginCompiler.jar` file (you can download it from this folder)
* Java's [SE Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) 
* A copy of the spigot api, which can be obtained by: 
  * Compiling it yourself from [here](https://www.spigotmc.org/wiki/buildtools/) (recommended for plugin developers, or server owners)
  * Downloading it from [somewhere else](https://yivesmirror.com/grab/spigot/spigot-api-latest.jar) (recommended for the lazy, or people who don't know what they're doing)

### Steps

1. Make sure the spigot API file is in the same folder as the `PluginCompiler.jar`
2. Make sure the spigot API file is named exactly `spigot-api-latest.jar` (PluginCompiler version 0.1 requires this exact name _(version 0.1 doesn't have any number in the file name)_) 
3. Run the `PluginCompiler.jar` file.
   1. Enter a name for the plugin (Ideally, don't use any fancy characters)
   2. Enter a brief description of what your plugin does
   3. Enter your name as the author
   4. Copy the code from the [PluginCreator](https://jorelali.github.io/PluginCreator/) and paste it into the code textbox on the right
   5. Press generate
4. If all goes well, a new folder will appear (named similar to the plugin name) and a `.jar` output file will be created. _(If a new folder doesn't appear, something has gone wrong with the code. This can be due to bugs in the PluginCreator, or not having the development kit installed properly.)_

### Upcoming features

* Much much much better GUI
* Output logs
* Console output from compilation
* Option to choose your API .jar file (an alternative to `spigot-api-latest.jar`)

