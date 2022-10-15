# WordPress Setup

## Create MySQL Database

```bash
sudo mysql
```

```sql
CREATE DATABASE hzon_wp_db;
CREATE USER 'hzon_wp_admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'HZ@dm1nP@$$wd#';
GRANT USAGE ON *.* TO 'hzon_wp_admin'@'localhost';
ALTER USER 'hzon_wp_admin'@'localhost' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON `hzon_wp_db`.* TO 'hzon_wp_admin'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

## Install WordPress

```bash
mkdir hzwp
cd hzwp
```

```bash
wp core download --locale=en_US
wp config create --dbname=hzon_wp_db --dbuser=hzon_wp_admin --dbpass='HZ@dm1nP@$$wd#' --locale=en_US
wp core install --url=hyperzon.szs.space --title="Hyperzon Blog Editor" --admin_user='hzon' --admin_password='HZ@dm1nP@$$wd#' --admin_email=admin@szs.space

# Change the default Site URL, Home URL, Timezone
wp option update siteurl https://hyperzon.szs.space/hz-wp
wp option update home https://hyperzon.szs.space/hz-wp
wp option update timezone_string Europe/Sofia

# Change user password
wp user update hzon --display_name=Hyperzon --user_pass='HZ@dm1nP@$$wd#'

# Update all
wp core update
wp plugin update --all

# Install plugins
wp plugin install classic-editor
wp plugin activate classic-editor
```

## Backup options

```bash
cd hzwp
```

```bash
# Export/Import the database
wp db export --add-drop-table
wp db import hzon_wp_db-2022-10-15-9159cdc.sql
```

```bash
cd ..
rm -Rf assets/wp/wp-init-state.tar.gz
tar czvf assets/wp/wp-init-state.tar.gz hzwp/
```

## References

* [wp core [command]](https://developer.wordpress.org/cli/commands/core/)
* [wp core install](https://developer.wordpress.org/cli/commands/core/install/)
* [Change WordPress Domain URL with WP-CLI Tool](https://wpbeaches.com/change-wordpress-domain-url-with-wp-cli-tool/)
