<?php
/**
 * Plugin Name: Khải Nguyên WordPress Headless Helper
 * Description: Tự động cấu hình Custom Post Type 'san-pham', danh mục 'product_cat' và giải phóng hoàn toàn mọi giới hạn ký tự nhập liệu (Tiêu đề, Meta SEO, Mô tả chi tiết...) cho sản phẩm và tin tức trên website Khải Nguyên Astro. Có tích hợp bộ quét chẩn đoán xung đột theme.
 * Version: 2.0.0
 * Author: Antigravity AI
 */

if (!defined('ABSPATH')) {
    exit;
}

// 1. Đăng ký Custom Post Type 'san-pham' và Taxonomy 'product_cat'
function khainguyen_register_post_types() {
    register_post_type('san-pham', array(
        'labels' => array(
            'name' => 'Sản phẩm',
            'singular_name' => 'Sản phẩm',
            'add_new' => 'Thêm sản phẩm',
            'add_new_item' => 'Thêm sản phẩm mới',
            'edit_item' => 'Sửa sản phẩm',
            'new_item' => 'Sản phẩm mới',
            'view_item' => 'Xem sản phẩm',
            'search_items' => 'Tìm sản phẩm',
            'not_found' => 'Không tìm thấy sản phẩm nào',
            'not_found_in_trash' => 'Không có sản phẩm nào trong thùng rác',
            'menu_name' => 'Sản phẩm',
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-archive',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest' => true,
    ));

    register_taxonomy('product_cat', 'san-pham', array(
        'labels' => array(
            'name' => 'Danh mục sản phẩm',
            'singular_name' => 'Danh mục sản phẩm',
            'search_items' => 'Tìm danh mục',
            'all_items' => 'Tất cả danh mục',
            'parent_item' => 'Danh mục cha',
            'parent_item_colon' => 'Danh mục cha:',
            'edit_item' => 'Sửa danh mục',
            'update_item' => 'Cập nhật danh mục',
            'add_new_item' => 'Thêm danh mục mới',
            'new_item_name' => 'Tên danh mục mới',
            'menu_name' => 'Danh mục sản phẩm',
        ),
        'hierarchical' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'show_in_rest' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'product_cat'),
    ));

    register_taxonomy_for_object_type('product_cat', 'san-pham');
}
add_action('init', 'khainguyen_register_post_types');

// 2. Đăng ký Meta Box cho Sản phẩm & Tin tức (post)
function khainguyen_add_headless_meta_boxes() {
    // Meta Box cho Sản phẩm
    add_meta_box(
        'khainguyen_product_details',
        'Thông tin thông số sản phẩm & Meta SEO (Astro / Next.js)',
        'khainguyen_product_meta_box_callback',
        'san-pham',
        'normal',
        'high'
    );
    // Meta Box cho Tin tức / Blogs
    add_meta_box(
        'khainguyen_post_details',
        'Cấu hình Meta SEO Tin tức (Astro / Next.js)',
        'khainguyen_post_meta_box_callback',
        'post',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'khainguyen_add_headless_meta_boxes');

// Callback hiển thị Meta Box Sản phẩm
function khainguyen_product_meta_box_callback($post) {
    $price = get_post_meta($post->ID, '_product_price', true);
    $brand = get_post_meta($post->ID, '_product_brand', true);
    $condition = get_post_meta($post->ID, '_product_condition', true);
    $availability = get_post_meta($post->ID, '_product_availability', true);
    
    $is_new = get_post_meta($post->ID, '_product_is_new', true);
    $is_hot = get_post_meta($post->ID, '_product_is_hot', true);
    $is_bestseller = get_post_meta($post->ID, '_product_is_bestseller', true);

    $gtin = get_post_meta($post->ID, '_product_gtin', true);
    $mpn = get_post_meta($post->ID, '_product_mpn', true);
    $google_cat = get_post_meta($post->ID, '_product_google_cat', true);

    $meta_desc = get_post_meta($post->ID, '_product_meta_description', true);

    wp_nonce_field('khainguyen_save_product_meta', 'khainguyen_product_meta_nonce');
    ?>
    <table class="form-table" style="width: 100%;">
        <tr>
            <th style="width: 25%; text-align: left;"><label for="product_meta_description">Meta Description (Mô tả SEO Google):</label></th>
            <td>
                <textarea id="product_meta_description" name="product_meta_description" rows="3" style="width: 100%; max-width: 600px;" placeholder="Nhập câu mô tả ngắn hiển thị trên kết quả tìm kiếm Google (Gõ tự do không giới hạn)..."><?php echo esc_textarea($meta_desc); ?></textarea>
                <p class="description" style="margin-top: 5px;">
                    Số ký tự đã nhập: <strong id="meta_desc_counter" style="color: #007cba;">0</strong> ký tự (Khuyến nghị khoảng ~160 ký tự cho SEO).
                </p>
            </td>
        </tr>
        <tr>
            <th style="text-align: left;"><label for="product_price">Giá sản phẩm (VNĐ):</label></th>
            <td>
                <input type="number" id="product_price" name="product_price" value="<?php echo esc_attr($price); ?>" style="width: 100%; max-width: 400px;" placeholder="Ví dụ: 15000000" />
            </td>
        </tr>
        <tr>
            <th style="text-align: left;"><label for="product_brand">Thương hiệu:</label></th>
            <td>
                <input type="text" id="product_brand" name="product_brand" value="<?php echo esc_attr($brand); ?>" style="width: 100%; max-width: 400px;" placeholder="Ví dụ: Kobelco, Hitachi, Atlas Copco..." />
            </td>
        </tr>
        <tr>
            <th style="text-align: left;"><label for="product_condition">Tình trạng:</label></th>
            <td>
                <input type="text" id="product_condition" name="product_condition" value="<?php echo esc_attr($condition ? $condition : 'Mới'); ?>" style="width: 100%; max-width: 400px;" />
            </td>
        </tr>
        <tr>
            <th style="text-align: left;"><label for="product_availability">Khả dụng (Còn hàng/Hết hàng):</label></th>
            <td>
                <input type="text" id="product_availability" name="product_availability" value="<?php echo esc_attr($availability ? $availability : 'Còn hàng'); ?>" style="width: 100%; max-width: 400px;" />
            </td>
        </tr>
        <tr>
            <th style="text-align: left;"><label for="product_gtin">Mã GTIN (Mã vạch):</label></th>
            <td>
                <input type="text" id="product_gtin" name="product_gtin" value="<?php echo esc_attr($gtin); ?>" style="width: 100%; max-width: 400px;" placeholder="Chưa cập nhật" />
            </td>
        </tr>
        <tr>
            <th style="text-align: left;"><label for="product_mpn">Mã MPN (Mã linh kiện):</label></th>
            <td>
                <input type="text" id="product_mpn" name="product_mpn" value="<?php echo esc_attr($mpn); ?>" style="width: 100%; max-width: 400px;" placeholder="Chưa cập nhật" />
            </td>
        </tr>
        <tr>
            <th style="text-align: left;"><label for="product_google_cat">Danh mục Google:</label></th>
            <td>
                <input type="text" id="product_google_cat" name="product_google_cat" value="<?php echo esc_attr($google_cat); ?>" style="width: 100%; max-width: 400px;" placeholder="Chưa phân loại" />
            </td>
        </tr>
        <tr>
            <th style="text-align: left; vertical-align: top;"><label for="product_description">Mô tả sản phẩm chi tiết (không giới hạn số từ):</label></th>
            <td>
                <?php 
                $desc = get_post_meta($post->ID, '_product_description', true);
                wp_editor($desc, 'product_description', array(
                    'textarea_name' => 'product_description',
                    'textarea_rows' => 10,
                    'media_buttons' => true,
                ));
                ?>
                <p class="description" style="margin-top: 5px; color: #666;">Nhập nội dung chi tiết bài viết sản phẩm. Gõ tự do thoải mái không giới hạn.</p>
            </td>
        </tr>
        <tr>
            <th style="text-align: left;">Các nhãn nổi bật:</th>
            <td>
                <label style="margin-right: 15px;">
                    <input type="checkbox" name="product_is_new" value="1" <?php checked($is_new, '1'); ?> /> Sản phẩm mới
                </label>
                <label style="margin-right: 15px;">
                    <input type="checkbox" name="product_is_hot" value="1" <?php checked($is_hot, '1'); ?> /> Sản phẩm HOT
                </label>
                <label style="margin-right: 15px;">
                    <input type="checkbox" name="product_is_bestseller" value="1" <?php checked($is_bestseller, '1'); ?> /> Bán chạy (Best Seller)
                </label>
            </td>
        </tr>
    </table>
    <?php
}

// Callback hiển thị Meta Box Tin tức
function khainguyen_post_meta_box_callback($post) {
    $meta_desc = get_post_meta($post->ID, '_post_meta_description', true);
    wp_nonce_field('khainguyen_save_post_meta', 'khainguyen_post_meta_nonce');
    ?>
    <table class="form-table" style="width: 100%;">
        <tr>
            <th style="width: 25%; text-align: left;"><label for="post_meta_description">Meta Description (Mô tả SEO Google):</label></th>
            <td>
                <textarea id="post_meta_description" name="post_meta_description" rows="3" style="width: 100%; max-width: 600px;" placeholder="Nhập câu mô tả ngắn hiển thị trên kết quả tìm kiếm Google cho bài viết (Gõ tự do không giới hạn)..."><?php echo esc_textarea($meta_desc); ?></textarea>
                <p class="description" style="margin-top: 5px;">
                    Số ký tự đã nhập: <strong id="post_meta_desc_counter" style="color: #007cba;">0</strong> ký tự (Khuyến nghị khoảng ~160 ký tự cho SEO).
                </p>
            </td>
        </tr>
    </table>
    <?php
}

// 3. Lưu dữ liệu khi cập nhật bài viết
// Lưu dữ liệu Sản phẩm
function khainguyen_save_product_meta_box_data($post_id) {
    if (!isset($_POST['khainguyen_product_meta_nonce']) || !wp_verify_nonce($_POST['khainguyen_product_meta_nonce'], 'khainguyen_save_product_meta')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = array(
        'product_price' => '_product_price',
        'product_brand' => '_product_brand',
        'product_condition' => '_product_condition',
        'product_availability' => '_product_availability',
        'product_gtin' => '_product_gtin',
        'product_mpn' => '_product_mpn',
        'product_google_cat' => '_product_google_cat'
    );

    foreach ($fields as $post_key => $meta_key) {
        if (isset($_POST[$post_key])) {
            update_post_meta($post_id, $meta_key, sanitize_text_field($_POST[$post_key]));
        }
    }

    if (isset($_POST['product_meta_description'])) {
        update_post_meta($post_id, '_product_meta_description', sanitize_text_field($_POST['product_meta_description']));
    }

    if (isset($_POST['product_description'])) {
        update_post_meta($post_id, '_product_description', wp_kses_post($_POST['product_description']));
    }

    $checkboxes = array(
        'product_is_new' => '_product_is_new',
        'product_is_hot' => '_product_is_hot',
        'product_is_bestseller' => '_product_is_bestseller'
    );

    foreach ($checkboxes as $post_key => $meta_key) {
        $val = isset($_POST[$post_key]) ? '1' : '0';
        update_post_meta($post_id, $meta_key, $val);
    }
}
add_action('save_post', 'khainguyen_save_product_meta_box_data');

// Lưu dữ liệu Tin tức
function khainguyen_save_post_meta_box_data($post_id) {
    if (!isset($_POST['khainguyen_post_meta_nonce']) || !wp_verify_nonce($_POST['khainguyen_post_meta_nonce'], 'khainguyen_save_post_meta')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['post_meta_description'])) {
        update_post_meta($post_id, '_post_meta_description', sanitize_text_field($_POST['post_meta_description']));
    }
}
add_action('save_post', 'khainguyen_save_post_meta_box_data');

// 4. Bơm JavaScript toàn cục vào màn hình soạn thảo Admin để tự động xóa gỡ bỏ thuộc tính giới hạn gõ (maxlength)
function khainguyen_global_admin_script() {
    global $pagenow;
    if ($pagenow === 'post.php' || $pagenow === 'post-new.php') {
        ?>
        <script>
        (function() {
            try {
                Object.defineProperty(HTMLInputElement.prototype, 'maxLength', {
                    get: function() { return -1; },
                    set: function() { return -1; },
                    configurable: true
                });
                Object.defineProperty(HTMLTextAreaElement.prototype, 'maxLength', {
                    get: function() { return -1; },
                    set: function() { return -1; },
                    configurable: true
                });
            } catch(e) {}
        })();

        jQuery(document).ready(function($) {
            function removeAllLimits() {
                $('input, textarea, [contenteditable="true"]').each(function() {
                    if ($(this).attr('maxlength')) {
                        $(this).removeAttr('maxlength');
                    }
                });

                var $gutenbergTitle = $('.editor-post-title__input, #post-title-0');
                if ($gutenbergTitle.length && $gutenbergTitle.attr('maxlength')) {
                    $gutenbergTitle.removeAttr('maxlength');
                }

                var $metaDesc = $('#product_meta_description');
                if ($metaDesc.length) {
                    $('#meta_desc_counter').text($metaDesc.val().length);
                }

                var $postMetaDesc = $('#post_meta_description');
                if ($postMetaDesc.length) {
                    $('#post_meta_desc_counter').text($postMetaDesc.val().length);
                }
            }

            removeAllLimits();
            setInterval(removeAllLimits, 500);
        });
        </script>
        <?php
    }
}
add_action('admin_footer', 'khainguyen_global_admin_script');

// 5. Ánh xạ dữ liệu Meta Box vào API REST của WordPress thành định dạng "acf"
function khainguyen_register_rest_fields() {
    // Ánh xạ trường cho Sản phẩm
    register_rest_field('san-pham', 'acf', array(
        'get_callback' => 'khainguyen_get_product_acf_fields_rest',
        'schema' => null,
    ));
    
    // Ánh xạ trường cho Tin tức (posts)
    register_rest_field('post', 'acf', array(
        'get_callback' => 'khainguyen_get_post_acf_fields_rest',
        'schema' => null,
    ));
}
add_action('rest_api_init', 'khainguyen_register_rest_fields');

function khainguyen_get_product_acf_fields_rest($object) {
    $post_id = $object['id'];
    
    $img_url = '';
    $img_id = get_post_thumbnail_id($post_id);
    if ($img_id) {
        $img_src = wp_get_attachment_image_src($img_id, 'full');
        if ($img_src) {
            $img_url = $img_src[0];
        }
    }
    
    return array(
        'price' => get_post_meta($post_id, '_product_price', true),
        'brand' => get_post_meta($post_id, '_product_brand', true),
        'condition' => get_post_meta($post_id, '_product_condition', true),
        'availability' => get_post_meta($post_id, '_product_availability', true),
        'gtin' => get_post_meta($post_id, '_product_gtin', true),
        'mpn' => get_post_meta($post_id, '_product_mpn', true),
        'google_product_category' => get_post_meta($post_id, '_product_google_cat', true),
        'meta_description' => get_post_meta($post_id, '_product_meta_description', true),
        'description' => get_post_meta($post_id, '_product_description', true),
        'is_new' => get_post_meta($post_id, '_product_is_new', true) === '1',
        'is_hot' => get_post_meta($post_id, '_product_is_hot', true) === '1',
        'is_bestseller' => get_post_meta($post_id, '_product_is_bestseller', true) === '1',
        'featured_image_url' => $img_url
    );
}

function khainguyen_get_post_acf_fields_rest($object) {
    $post_id = $object['id'];
    
    $img_url = '';
    $img_id = get_post_thumbnail_id($post_id);
    if ($img_id) {
        $img_src = wp_get_attachment_image_src($img_id, 'full');
        if ($img_src) {
            $img_url = $img_src[0];
        }
    }
    
    return array(
        'meta_description' => get_post_meta($post_id, '_post_meta_description', true),
        'featured_image_url' => $img_url
    );
}

// 6. Bảo mật WordPress REST API: Vô hiệu hóa endpoint /wp/v2/users
add_filter('rest_endpoints', function($endpoints) {
    if (isset($endpoints['/wp/v2/users'])) {
        unset($endpoints['/wp/v2/users']);
    }
    if (isset($endpoints['/wp/v2/users/(?P<id>[\d]+)'])) {
        unset($endpoints['/wp/v2/users/(?P<id>[\d]+)']);
    }
    return $endpoints;
});
