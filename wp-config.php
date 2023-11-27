<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u106099048_V5u1A' );

/** Database username */
define( 'DB_USER', 'u106099048_QIe5x' );

/** Database password */
define( 'DB_PASSWORD', 'EhY5aKZ4qM' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'URy;(j^LAN ~ya(^M<I6(E([-3;]a`6}&,OT{Lu;hshuqm 9_N#T@ %X~ wUlu?Z' );
define( 'SECURE_AUTH_KEY',   '3KGnh!em`5=wy{J3<rlzrrr$c(e|g.8nI`muF#@:As;FgdW/MyyAQyY^R)Xi~{.I' );
define( 'LOGGED_IN_KEY',     'ZBF)<0uo%!LBH4{v>V<iKJ2PpW4w#zUROh*8i[>QTEP`w@;Nfrp9RaLUjZH,I5Np' );
define( 'NONCE_KEY',         ':F;w>dZBp)`*lnaxH<A|DNH`YXX%^K{f+8t<s&vNPj9KUdHp8Bha&oP71mJs[i*?' );
define( 'AUTH_SALT',         'fRgq}j*ft6><bW(6qT]p(ke6}N=!wb&J3+ &5Vg<O^q4g:?Z(4^Wx]}=-2%^!!@W' );
define( 'SECURE_AUTH_SALT',  '%k@zhg*JlB_9cA`_rGP!QdoG;#rB#FHv~`?D%Uw{0?VD<$$.AJgF=X,(#Xz@O>Eq' );
define( 'LOGGED_IN_SALT',    'RQ2M){D,$^>n,aQxsV`[Ad%6o VWJ1p5rWkySg>1i=$gH!h:3{AI~Yq~,s7A{YEl' );
define( 'NONCE_SALT',        'SNMrye=V=9^wUGB2 cYWNV12ek@<U<(c|&*hwQ_N}_-N3,XojvWb}j<82d)_`^2n' );
define( 'WP_CACHE_KEY_SALT', ':JmR@K9@)k~+?tag>RnZi!64Hz6`f9fKhE/fCuY*Iel]Bgjp3j5emd=d@uF`!*`j' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
